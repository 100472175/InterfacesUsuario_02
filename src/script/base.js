function menu_h() {
	var display = document.getElementById("menu_h").style.display;
	if (display == "none" || display.length == 0) {display_menu();}
	else {close_menu();}
}

function display_menu (){
	document.getElementById('menu_h').style.display = "grid";
	if (window.innerWidth <= 768) {document.getElementById('menu_h').style.width = "35vw";}
	else {document.getElementById('menu_h').style.width = "23.5vw"}
}

function close_menu (){
	document.getElementById('menu_h').style.display = "none";
	document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
	document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
	fold();
}

function display_unfolding_s (){
	unfold_specialities = document.getElementById('unfolding_specialities');
	document.getElementById('unfolding_about_us').style.display = "none";
	if (window.innerWidth > 768) {unfold_specialities.style.marginLeft = "45vw"}
	else {unfold_specialities.style.marginLeft = "32.5vw"}	
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
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#7E4D28";
		}
	}
}

function display_unfolding_s_h (){
	unfold_specialities = document.getElementById('unfolding_specialities');
	document.getElementById('unfolding_about_us').style.display = "none";	
	if (unfold_specialities.style.top != "19%"){
		if (window.innerWidth <= 768) {unfold_specialities.style.marginLeft = "35vw";}
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
			if (window.innerWidth <= 768) {unfold_specialities.style.marginLeft = "35vw";}
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
	if (window.innerWidth > 768) {unfold_about_us.style.marginLeft = "67vw"}
	else {unfold_about_us.style.marginLeft = "58vw"}
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
		if (window.innerWidth <= 768) {unfold_about_us.style.marginLeft="35vw";}
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
			if (window.innerWidth <= 768) {unfold_about_us.style.marginLeft="35vw";}
			else {unfold_about_us.style.marginLeft = "23.5vw";}
			unfold_about_us.style.display = "grid";
			document.getElementById('menu_h_about_us').style.backgroundColor = "#C48152";
			document.getElementById('menu_h_specialities').style.backgroundColor = "#7E4D28";
		}
	}
}

function fold (){
	document.getElementById('unfolding_about_us').style.display = "none";
	document.getElementById('unfolding_specialities').style.display = "none";	
}

function check_session(){
	var session = Object.keys(sessionStorage);
	if (session.length == 0) return false;
	return true;
}

function load() {
	document.getElementById('menu_specialities').addEventListener("click", display_unfolding_s);
	document.getElementById('menu_about_us').addEventListener("click", display_unfolding_a);
	document.getElementById('menu_h_specialities').addEventListener("click", display_unfolding_s_h);
	document.getElementById('menu_h_about_us').addEventListener("click", display_unfolding_a_h);
	document.getElementById('open_menu_h').addEventListener("click", menu_h);
	var labels = document.getElementsByTagName('input');
	for (i = 0; i < labels.length; i++) {labels[i].addEventListener("click", close_menu);}
	var buttons = document.getElementsByTagName('button');
	for (i = 0; i < buttons.length; i++) {if (buttons[i].id != "open_menu_h") {buttons[i].addEventListener("click", close_menu);}}
	window.addEventListener("resize", close_menu);
}

document.addEventListener("DOMContentLoaded", load, false);
