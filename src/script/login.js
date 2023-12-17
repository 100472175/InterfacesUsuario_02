function go_to_sign_up() {
	//Función que hace display de sign up
	document.getElementById("sign-up").style.display = "block";
	document.getElementById("log-in").style.display = "none";
}

function go_to_log_in() {
	//Función que hace display de log in
	document.getElementById("sign-up").style.display = "none";
	document.getElementById("log-in").style.display = "block";
}

function welcome_message(op, name=null) {
	//Función que escribe un mensaje de bienvenida siempre y cuando haya una sesión iniciada
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
	//Función que imprime un mensaje de error, local a log in por el estilo del mensaje
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
	//Función que esconde el error
	var login = document.getElementById("register_form_login");
	var signup = document.getElementById("register_form_signup");
	var div = document.getElementById("register_error_div");
	div.style.display = "none";
	login.style.display = "grid";
	signup.style.display = "grid";
}

function close_session(){
	//Función que se encarga de cerrar sesión
	sessionStorage.clear();
	welcome_message(0, "");
}

function log_in(){
	//Función que comprueba los datos del login, si son correctos, se hace login y se imprime el mensaje de bienvenida
	var name = document.getElementById('login_user_name');
	var pwd = document.getElementById('login_pwd');
	
	if (check_name(name.value) == 0) {
		error_message("Debe introducir un nombre válido", 0);
		return false;
	}
	
	if (check_user(name.value) == 0) {
		error_message("No existe ese usuario", 0);
		return false;
	}
	
	var user = localStorage.getItem(name.value, pwd.value);
	var index = user.indexOf(";");
	if (user.substring(index + 1) != pwd.value) {
		error_message("Constraseña incorrecta", 0);
		return false;
	}
	
	welcome_message(1, name.value);
	sessionStorage.setItem(name.value, user);
	
	name.value = "";
	pwd.value = "";
} 

function sign_up() {
	//Función que comprueba los datos del sign up, si son correctos se crea una cuenta y se imprime el mensaje de bienvenida
	var name = document.getElementById('signup_user_name');
	var pwd = document.getElementById('signup_pwd');
	var email = document.getElementById('signup_email');
	
	if (check_name(name.value) == 0) {
		error_message("Nombre no válido", 1);
		return -1;
	}
	
	if (check_pwd(pwd.value) == -1) {
		error_message("Contraseña no válida", 1);
		return -1;
	}
	
	if (check_email(email.value) == 0) {
		error_message("Correo electrónico no válido", 1);
		return -1;
	}
	
	if (check_user(name.value) == -1) {
		error_message("Ese usuario ya está registrado", 1);
		return -1;
	}
	
	localStorage.setItem(name.value, email.value + ";" + pwd.value);
	sessionStorage.setItem(name.value, pwd.value);
	welcome_message(1, name.value);
	
	name.value = "";
	pwd.value = "";
	email.value = "";
	
	go_to_log_in()
}

function check_email(email) {
	//Función que comprueba un e-mail
	const regex = /^[a-z0-9]+@[a-z]+\.+[a-z]{2,4}$/;
	return regex.test(email)	
}

function check_name(name) {
	//Función que comprueba un nombre
	const regex=/^[\w]+$/;
	return regex.test(name)
}

function check_pwd(pwd) {
	//Función que comprueba una contraseña
	if (pwd.length < 6) {return -1;}
	return 0;	
}

function check_user(key) {
	//Función que comprueba que un usuario existe
	let user = localStorage.getItem(key);
	if (user == null) {return 0;}
	return -1
}

function load_session() {
	//Función que se encarga de imprimir el mensaje de bienvenida si al recargar la página había una sesión iniciada
	if (check_session() == true) {welcome_message(1, Object.keys(sessionStorage)[0])}
}

document.addEventListener("DOMContentLoaded", load_session, false);
