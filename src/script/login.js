function go_to_sign_up() {
	document.getElementById("sign-up").style.display = "block";
	document.getElementById("log-in").style.display = "none";
}

function go_to_log_in() {
	document.getElementById("sign-up").style.display = "none";
	document.getElementById("log-in").style.display = "block";
}

function welcome_message(op, name=null) {
	if (op == 1) {
		document.getElementById("register_form_login").style.display = "none";
		document.getElementById("register_welcome_mssg").innerHTML = "Bienvenido/a, " + name;
		document.getElementById("register_logged_in").style.display = "grid";
	}
	else if (op == 0) {
		document.getElementById("register_form_login").style.display = "grid";
		document.getElementById("register_logged_in").style.display = "none";
	}
}

function close_session(){
	sessionStorage.clear();
	welcome_message(0, "");
}

function log_in(){
	var name = document.getElementById('login_user_name').value;
	var pwd = document.getElementById('login_pwd').value;
	
	if (check_name(name) == 0) {
		alert("Debe introducir un nombre");
		return -1;
	}
	
	if (check_user(name) == 0) {
		alert("No existe ese usuario");
		return -1;
	}
	
	var user = localStorage.getItem(name, pwd);
	var index = user.indexOf(";");
	if (user.substring(index + 1) != pwd) {
		alert("Constraseña incorrecta");
		return -1;
	}
	alert("¡Sesión iniciada correctamente!");
	welcome_message(1, name);
	sessionStorage.setItem(name);
} 

function sign_up() {
	var name = document.getElementById('signup_user_name').value;
	var pwd = document.getElementById('signup_pwd').value;
	var email = document.getElementById('signup_email').value;
	
	if (check_name(name) == 0) {
		alert("Nombre no válido");
		return -1;
	}
	
	if (check_pwd(pwd) == -1) {
		alert("Contraseña no válida");
		return -1;
	}
	
	if (check_email(email) == 0) {
		alert("Correo electrónico no válido");
		return -1;
	}
	
	if (check_user(name) == -1) {
		alert("Ese usuario ya está registrado");
		return -1;
	}
	
	localStorage.setItem(name, email + ";" + pwd);
	sessionStorage.setItem(name, pwd);
	alert("¡Cuenta creada con exito!");
	welcome_message(1, name);
	go_to_log_in()
}

function check_email(email) {
	const regex = /^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;
	return regex.test(email)	
}

function check_name(name) {
	const regex=/^[\w]+$/;
	return regex.test(name)
}

function check_pwd(pwd) {
	if (pwd.length < 6) {return -1;}
	return 0;	
}

function check_user(key) {
	let user = localStorage.getItem(key);
	if (user == null) {return 0;}
	return -1
}
