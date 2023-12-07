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
		document.getElementById("register_welcome_mssg").innerHTML = "Te damos la bienvenida, " + name;
		document.getElementById("register_logged_in").style.display = "grid";
	}
	else if (op == 0) {
		document.getElementById("register_form_login").style.display = "grid";
		document.getElementById("register_logged_in").style.display = "none";
	}
}

function error_message(mssg, page) {
	var div = document.getElementById("register_error_div");
	var login = document.getElementById("register_form_login")
	var signup = document.getElementById("register_form_signup");
	var p = document.getElementById("register_error_p");
	p.innerHTML = mssg;
	
	if (page == 0) {
		div.style.marginLeft = "17vw";
	}
	
	else if (page == 1) {
		if (window.innerWidth > 768) {div.style.marginLeft = "43vw";}
		else {div.style.marginLeft = "17vw";}
	}
	
	login.style.display = "none";
	signup.style.display = "none";
	div.style.display = "grid";
	
}

function hide_error() {
	var login = document.getElementById("register_form_login");
	var signup = document.getElementById("register_form_signup");
	var div = document.getElementById("register_error_div");
	div.style.display = "none";
	login.style.display = "grid";
	signup.style.display = "grid";
}

function close_session(){
	sessionStorage.clear();
	welcome_message(0, "");
}

function log_in(){
	var name = document.getElementById('login_user_name').value;
	var pwd = document.getElementById('login_pwd').value;
	
	if (check_name(name) == 0) {
		error_message("Debe introducir un nombre válido", 0);
		return -1;
	}
	
	if (check_user(name) == 0) {
		error_message("No existe ese usuario", 0);
		return -1;
	}
	
	var user = localStorage.getItem(name, pwd);
	var index = user.indexOf(";");
	if (user.substring(index + 1) != pwd) {
		error_message("Constraseña incorrecta", 0);
		return -1;
	}
	welcome_message(1, name);
	sessionStorage.setItem(name, user);
} 

function sign_up() {
	var name = document.getElementById('signup_user_name').value;
	var pwd = document.getElementById('signup_pwd').value;
	var email = document.getElementById('signup_email').value;
	
	if (check_name(name) == 0) {
		error_message("Nombre no válido", 1);
		return -1;
	}
	
	if (check_pwd(pwd) == -1) {
		error_message("Contraseña no válida", 1);
		return -1;
	}
	
	if (check_email(email) == 0) {
		error_message("Correo electrónico no válido", 1);
		return -1;
	}
	
	if (check_user(name) == -1) {
		error_message("Ese usuario ya está registrado", 1);
		return -1;
	}
	
	localStorage.setItem(name, email + ";" + pwd);
	sessionStorage.setItem(name, pwd);
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

function load_session() {
	console.log(check_session());
	if (check_session() == true) {welcome_message(1, Object.keys(sessionStorage)[0])}
}

document.addEventListener("DOMContentLoaded", load_session, false);
