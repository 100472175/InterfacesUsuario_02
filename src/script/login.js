function go_to_sign_up() {
	document.getElementById("sign-up").style.display = "block";
	document.getElementById("log-in").style.display = "none";
}

function go_to_log_in() {
	document.getElementById("sign-up").style.display = "none";
	document.getElementById("log-in").style.display = "block";
} 

function sign_up() {
	var name = document.getElementById('signup_user_name').value;
	var pwd = document.getElementById('signup_pwd').value;
	var email = document.getElementById('signup_email').value;
	
	if (check_name(name) == -1) {
		alert("Nombre no válido");
		return -1;
	}
	
	if (check_pwd(pwd) == -1) {
		alert("Contraseña no válida");
		return -1;
	}
	
	if (check_email(email) == -1) {
		alert("Correo electrónico no válido")
		return -1;
	}
	
	if (check_unicity(email) == -1) {
		alert("Ese correo ya está registrado")
		return -1;
	}
	
	localStorage.setItem(email, name + ";" + pwd)
	alert("¡Cuenta creada con exito!")
}

function check_email(email) {
	const regex=/[\w-\.]+@([\w-]+\.)+[\w-]{2-4}/;
	return regex.test(email)	
}

function check_name(name) {
	const regex=/[\w]+/;
	return regex.test(name)
}

function check_pwd(pwd) {
	if (pwd.length < 6) {return -1;}
	return 0;	
}
function check_unicity(key) {
	let user = localStorage.getItem(key);
	console.log(user)
	if (user == null) {return 0;}
	return -1
}
