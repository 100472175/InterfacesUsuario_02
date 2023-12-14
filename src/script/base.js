//Funciones del menú de hamburguesa
function menu_h() {
	var transform = document.getElementById("menu_h").style.transform;
	if (transform == "scaleY(0)" || transform == "") {display_menu(); fold();}
	else {close_menu();}
}

function display_menu (){
	console.log(window.innerWidth)
	document.getElementById('menu_h').style.transform = "scaleY(1)";
	document.getElementById('menu_h').style.width = "23.5vw";
	document.getElementById('unfolding_specialities').style.width = "13vw";
	document.getElementById('unfolding_about_us').style.width = "13vw";
	if (window.innerWidth <= 768) {
		document.getElementById('menu_h').style.width = "50vw";
		document.getElementById('unfolding_specialities').style.width = "15vw";
		document.getElementById('unfolding_about_us').style.width = "15vw";
		}
	if (window.innerWidth <= 600) {
		document.getElementById('unfolding_specialities').style.width = "30vw";
		document.getElementById('unfolding_about_us').style.width = "30vw";
	}
}

function close_menu (){
	document.getElementById('menu_h').style.transform = "scaleY(0)";
	document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
	document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
	fold();
}

function hamburguer_close() {
	document.getElementById('menu_h').style.transform = "scaleY(0)";
	document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
	document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
}

function fold (){
	document.getElementById('unfolding_about_us').style.display = "none";
	document.getElementById('unfolding_specialities').style.display = "none";	
}

function display_unfolding_s (){
	unfold_specialities = document.getElementById('unfolding_specialities');
	document.getElementById('unfolding_about_us').style.display = "none";
	unfold_specialities.style.width = "13vw";
	unfold_specialities.style.marginLeft = "45vw";
	if (window.innerWidth <= 768) {
		unfold_specialities.style.marginLeft = "35vw"
		unfold_specialities.style.width = "15vw";
	}
	if (unfold_specialities.style.top != "5%"){
		unfold_specialities.style.top = "5%";
		unfold_specialities.style.display="grid";
		document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
	}
	else{	
		if (unfold_specialities.style.display == "grid") {
			unfold_specialities.style.display = "none";
		}
		else {
			unfold_specialities.style.display = "grid";
			unfold_specialities.style.width = "13vw";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
	}
}

function display_unfolding_s_h (){
	unfold_specialities = document.getElementById('unfolding_specialities');
	document.getElementById('unfolding_about_us').style.display = "none";	
	if (unfold_specialities.style.top != "19%"){
		if (window.innerWidth <= 768) {unfold_specialities.style.marginLeft = "50vw";}
		else {unfold_specialities.style.marginLeft = "23.5vw";}
		unfold_specialities.style.top = "19%";
		unfold_specialities.style.display="grid";
		document.getElementById('menu_h_specialities').style.backgroundColor = "#C48152";
		document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
	}
	else{	
		if (unfold_specialities.style.display == "grid") {
			unfold_specialities.style.display = "none";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		}
		else {
			if (window.innerWidth <= 768) {unfold_specialities.style.marginLeft = "50vw";}
			else {unfold_specialities.style.marginLeft = "23.5vw";}
			unfold_specialities.style.display = "grid";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#C48152";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
	}
}

function display_unfolding_a (){
	unfold_about_us = document.getElementById('unfolding_about_us');
	document.getElementById('unfolding_specialities').style.display = "none";
	unfold_about_us.style.width = "13vw";
	unfold_about_us.style.marginLeft = "67vw";
	if (window.innerWidth <= 768) {
		unfold_about_us.style.marginLeft = "61vw"
		unfold_about_us.style.width = "15vw";
	}
	if (unfold_about_us.style.top != "5%") {
		unfold_about_us.style.top = "5%";
		unfold_about_us.style.display="grid";
		document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
	else {
		if (unfold_about_us.style.display == "grid") {
			unfold_about_us.style.display = "none";
		}
		else {
			unfold_about_us.style.display = "grid";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
	}
}

function display_unfolding_a_h (){
	unfold_about_us = document.getElementById('unfolding_about_us');
	document.getElementById('unfolding_specialities').style.display = "none";
	if (unfold_about_us.style.top != "32.5%") {
		if (window.innerWidth <= 768) {unfold_about_us.style.marginLeft="50vw";}
		else {unfold_about_us.style.marginLeft = "23.5vw";}
		unfold_about_us.style.top = "32.5%";
		unfold_about_us.style.display="grid";
		document.getElementById('menu_h_about_us').style.backgroundColor = "#C48152";
		document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		}
	else {
		if (unfold_about_us.style.display == "grid") {
			unfold_about_us.style.display = "none";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
		else {
			if (window.innerWidth <= 768) {unfold_about_us.style.marginLeft="50vw";}
			else {unfold_about_us.style.marginLeft = "23.5vw";}
			unfold_about_us.style.display = "grid";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#C48152";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		}
	}
}

//Funciones globales
function check_session(){
	let session = Object.keys(sessionStorage);
	if (session.length == 0) return false;
	return true;
}

function check_login() {
	if (!check_session()) {
		alert("Debe de iniciar sesión antes de pedir online");
		window.location.href = "login.html";
	}
	else{
		window.location.href = "menu.html";
	}
}

let page_to_hide;
let display_of_hidden_page;

function global_error_message(op, mssg="", page = "") {
	let error_div = document.getElementById("error_div");
	let error_p = document.getElementById("error_p");
	if (op === 0) {
		if (page_to_hide != "") {
			page_to_hide.style.display = display_of_hidden_page;
		}
		error_div.style.display = "none";
	}
	else if (op == 1) {
		if (page != "") {
			page_to_hide = page;
			display_of_hidden_page = window.getComputedStyle(page).getPropertyValue("display");
			page.style.display = "none";
		}
		else {
			page_to_hide = "";
			display_of_hidden_page = "";
		}
		error_div.style.display = "block";
		error_p.innerHTML = mssg;
	}
}

function load() {
	document.getElementById('menu_specialities').addEventListener("click", display_unfolding_s);
	document.getElementById('menu_about_us').addEventListener("click", display_unfolding_a);
	document.getElementById('menu_h_specialities').addEventListener("click", display_unfolding_s_h);
	document.getElementById('menu_h_about_us').addEventListener("click", display_unfolding_a_h);
	document.getElementById('open_menu_h').addEventListener("click", menu_h);
	let labels = document.getElementsByTagName('input');
	for (i = 0; i < labels.length; i++) {labels[i].addEventListener("click", close_menu);}
	let buttons = document.getElementsByTagName('button');
	for (i = 0; i < buttons.length; i++) {if (buttons[i].id != "open_menu_h") {buttons[i].addEventListener("click", close_menu);}}
	let anchors = document.getElementById("header").getElementsByTagName('a');
	for (i = 0; i < anchors.length; i++) {anchors[i].addEventListener("click", hamburguer_close);}
	window.addEventListener("resize", close_menu);
}

document.addEventListener("DOMContentLoaded", load, false);close_menu
