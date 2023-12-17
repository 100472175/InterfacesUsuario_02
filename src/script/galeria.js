//Listener que espera a que se haga click
window.onmousedown = e => {
	const track = document.getElementById("galery_track");
	track.dataset.mouseDownAt = e.clientX;
}

//Listener que espera a que se libere el click
window.onmouseup = e => {
	const track = document.getElementById("galery_track");
	track.dataset.mouseDownAt = "0";
	track.dataset.porcentajePrevio = track.dataset.porcentaje;
}

//Listener que espera a que se mueva el ratón
window.onmousemove = e => {
	const track = document.getElementById("galery_track");
	
	//Si no ha hecho click, devuelve 0
	if (track.dataset.mouseDownAt === "0") return;

	//Calcula cuanto tiene que moveer la galería
	const diff_raton = parseFloat(track.dataset.mouseDownAt) - e.clientX, diff_max = window.innerWidth/2;
	const porcentaje = (diff_raton / diff_max) * -100;
	var siguiente = parseFloat(track.dataset.porcentajePrevio)*0.75 + porcentaje;
	
	//Se comprueba que los valores sean válidos
	siguiente = Math.min(siguiente, 0);
	siguiente = Math.max(siguiente, -100);
	
	//Se cambia la flecha en función de donde te encuentres en la galería
	if (porcentaje < -50*0.75) {
		document.getElementById("galery_arrow").style.transform="scaleX(-1)";
	}
	else {
		document.getElementById("galery_arrow").style.transform="scaleX(1)";
	}
	
	track.dataset.porcentaje = siguiente;
	
	//Cambia la posición en función de resolución
	if (window.innerWidth <= 600) {
		track.style.transform = `translate(${siguiente}%, -45%)`;
	}
	else {
		track.style.transform = `translate(${siguiente}%, -50%)`;
	}
	
}
