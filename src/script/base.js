function menu_h() {
	var display = document.getElementById("menu_h").style.display;
	if (display == "none" || display.length == 0) {display_menu();}
	else {close_menu();}
}

function display_menu (){
	document.getElementById('menu_h').style.display = "grid";
}

function close_menu (){
	document.getElementById('menu_h').style.display = "none";
}

function display_unfolding_s (){
	document.getElementById('unfolding_about_us').style.display = "none";	
	if (document.getElementById('unfolding_specialities').style.top != "5%"){
		document.getElementById('unfolding_specialities').style.marginLeft = "52.5vw";
		document.getElementById('unfolding_specialities').style.top = "5%";
		document.getElementById('unfolding_specialities').style.display="grid";
	}
	else{	
		if (document.getElementById('unfolding_specialities').style.display == "grid") {
			document.getElementById('unfolding_specialities').style.display = "none";
		}
		else {
			document.getElementById('unfolding_specialities').style.display = "grid";
		}
	}
}

function display_unfolding_s_h (){
	document.getElementById('unfolding_about_us').style.display = "none";	
	if (document.getElementById('unfolding_specialities').style.top != "20%"){
		document.getElementById('unfolding_specialities').style.marginLeft = "23.5vw";
		document.getElementById('unfolding_specialities').style.top = "20%";
		document.getElementById('unfolding_specialities').style.display="grid";
	}
	else{	
		if (document.getElementById('unfolding_specialities').style.display == "grid") {
			document.getElementById('unfolding_specialities').style.display = "none";
		}
		else {
			document.getElementById('unfolding_specialities').style.display = "grid";
		}
	}
}

function display_unfolding_a (){
	document.getElementById('unfolding_specialities').style.display = "none";
	if (document.getElementById('unfolding_about_us').style.top != "5%") {
		document.getElementById('unfolding_about_us').style.marginLeft = "70vw";
		document.getElementById('unfolding_about_us').style.top = "5%";
		document.getElementById('unfolding_about_us').style.display="grid";
		}
	else {
		if (document.getElementById('unfolding_about_us').style.display == "grid") {
			document.getElementById('unfolding_about_us').style.display = "none";
		}
		else {
			document.getElementById('unfolding_about_us').style.display = "grid";
		}
	}
}

function display_unfolding_a_h (){
	document.getElementById('unfolding_specialities').style.display = "none";
	if (document.getElementById('unfolding_about_us').style.top != "33%") {
		document.getElementById('unfolding_about_us').style.marginLeft = "23.5vw";
		document.getElementById('unfolding_about_us').style.top = "33%";
		document.getElementById('unfolding_about_us').style.display="grid";
		}
	else {
		if (document.getElementById('unfolding_about_us').style.display == "grid") {
			document.getElementById('unfolding_about_us').style.display = "none";
		}
		else {
			document.getElementById('unfolding_about_us').style.display = "grid";
		}
	}
}

function close_menus (){
	document.getElementById('menu_h').style.display= "none";
	document.getElementById('unfolding_about_us').style.display = "none";
	document.getElementById('unfolding_specialities').style.display = "none";
}

function fold (){
	document.getElementById('unfolding_about_us').style.display = "none";
	document.getElementById('unfolding_specialities').style.display = "none";	
}

function load() {
	document.getElementById('menu_specialities').addEventListener("click", display_unfolding_s);
	document.getElementById('menu_about_us').addEventListener("click", display_unfolding_a);
	document.getElementById('menu_h_specialities').addEventListener("click", display_unfolding_s_h);
	document.getElementById('menu_h_about_us').addEventListener("click", display_unfolding_a_h);
	document.getElementById('open_menu_h').addEventListener("click", menu_h);
	var labels = document.getElementsByTagName('input');
	for (i = 0; i < labels.length; i++) {labels[i].addEventListener("click", close_menus);}
	var buttons = document.getElementsByTagName('button');
	for (i = 0; i < buttons.length; i++) {if (buttons[i].id != "open_menu_h") {buttons[i].addEventListener("click", close_menus);}}
}

document.addEventListener("DOMContentLoaded", load, false);
