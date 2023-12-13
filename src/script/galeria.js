window.onmousedown = e => {
	const track = document.getElementById("galery_track");
	track.dataset.mouseDownAt = e.clientX;
}

window.onmouseup = e => {
	const track = document.getElementById("galery_track");
	track.dataset.mouseDownAt = "0";
	track.dataset.porcentajePrevio = track.dataset.porcentaje;
}

window.onmousemove = e => {
	const track = document.getElementById("galery_track");
	if (track.dataset.mouseDownAt === "0") return;

	const diff_raton = parseFloat(track.dataset.mouseDownAt) - e.clientX, diff_max = window.innerWidth/2;
	const porcentaje = (diff_raton / diff_max) * -100;
	var siguiente = parseFloat(track.dataset.porcentajePrevio)*0.75 + porcentaje;
	
	siguiente = Math.min(siguiente, 0);
	siguiente = Math.max(siguiente, -100);
	console.log(siguiente)
	if (porcentaje < -50*0.75) {
		document.getElementById("galery_arrow").style.transform="scaleX(-1)";
	}
	else {
		document.getElementById("galery_arrow").style.transform="scaleX(1)";
	}
	
	track.dataset.porcentaje = siguiente;
	

	if (window.innerWidth <= 600) {
		track.style.transform = `translate(${siguiente}%, -45%)`;
	}
	else {
		track.style.transform = `translate(${siguiente}%, -50%)`;
	}
	
}
