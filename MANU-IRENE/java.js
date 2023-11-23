/*jshint esversion: 6*/

//Variable global, que tiene los índices de las galerías
let id_img_galeria = [0, 0, 0];

function rotar_galeria(id, op) {
    //Función que se encarga del rotamiento de las galerías
    let id_real = id - 1;
    let gal = document.querySelectorAll(".galeria_inner");
    let lista_imagenes = gal[id_real].querySelectorAll(".img_galeria");
    console.log(lista_imagenes);
    //Checkea la dirección a la que tiene que ir, y desplaza el id correspondiente
    if (op == 1) {
        id_img_galeria[id_real] = (id_img_galeria[id_real] + 1) % lista_imagenes.length;
    } else {
        id_img_galeria[id_real] = (id_img_galeria[id_real] - 1);
        if (id_img_galeria[id_real] < 0) {
            id_img_galeria[id_real] += lista_imagenes.length;}
    }
    //Se desplaza a la imagen correspondiente
    lista_imagenes[id_img_galeria[id_real]].scrollIntoView({block: "center"});
}

function reveal() {
    //Función que se encarga de desvelar el texto a medida que scrolleas
	var elementos = document.querySelectorAll(".reveal")
	//For que recorre la lista de elementos con clase reveal y determina cuando se revelan
	for (var i = 0; i < elementos.length; i++) {
		var alturaviewport = window.innerHeight;
		var distanciatop = elementos[i].getBoundingClientRect().top;
		var elementoVisible = 150;
		if (distanciatop < alturaviewport - elementoVisible) {
			elementos[i].classList.add("active");
		} else {
			elementos[i].classList.remove("active");
		}
	  }
}

window.addEventListener("scroll", reveal)

function crear_cookie_usuario (DNI, person_name, surname, number, mail) {
    //Función que se encarga de crear las cookies del usuario, checkeando los datos
	var div_respuesta = document.getElementById('respuesta_formulario');
	var texto_respuesta = document.getElementById('texto_respuesta');
	//Si existe un dato incorrecto
	if (validate_DNI(DNI) == false || validate_name_surname(person_name,surname) == false || validate_phone(number) == false || validate_email(mail) == false){
		event.preventDefault();
		//Check de cual es el incorrecto
		if (validate_DNI(DNI) == false) {
		    alert("DNI no válido");
		} else if (validate_name_surname(person_name, surname) == false) {
		    alert("Nombre o apellidos no válidos");
		} else if ( validate_phone(number) == false) {
		    alert("Número de teléfono no válido");
		} else if(validate_email(email) == false ) {
		    alert("Email no válido");
		}
		//Fin de la función
		return;
    }
    //Si es correcto, recargas la página y guardas la cookie
    let url = window.document.URL;
    let new_url = url.substr(0, url.indexOf('?'));
    alert("¡Formulario enviado correctamente!");
    location.href = new_url;
    document.cookie = DNI + "=" + person_name + "," + surname + "," + number + "," + mail + ";" + ";path=/";
}

function validate_email(email) {
    //Función que se encarga de validar el email
    const re = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/;
    return re.test(email);
}

function validate_DNI(dni) {
    //Función que se encarga de validar el DNI
    const re = /^[0-9]{8}[A-Z]{1}$/;
    const dni_str = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (re.test(dni) == true) {
    	var numero = parseInt(dni.substr(0, 8));
    	let resto = numero % 23;
    	let char = dni_str[resto];
    	return char == dni[8];
    }
    return false;
}

function validate_name_surname(name, surname) {
    //Función que se encarga de validar el nombre y el apellido
    const re = /^([a-z]|[A-Z])+/;
    return re.test(name) && re.test(surname);
}

function validate_phone(number){
    //Función que se encarga de validar el número de telefono
    const re = /[6-7]{1}[0-9]{8}/;
    return re.test(number);
}

function validate_contact_form (){
    //Función que se encarga de validar el formulario
    let correo = document.getElementById('gmail_con').value;
    let mensaje = document.getElementById('mensaje').value;
    if (validate_email(correo) == false) {
        event.preventDefault();
        alert("Email de contacto no válido");
        return;
    }
    if(mensaje.length == 0) {
        event.preventDefault();
        alert("Debes escribir un mensaje");
        return;
    }
    alert("¡Comentario enviado!");
}

function crear_cookie_plato(nombre, precio, cantidad) {
    //Función que se encarga de crear la cookie de un plato, siempre y cuando se pida
	if (cantidad != 0) {
		document.cookie = nombre + "=" + cantidad + ";" + "path=/";
	}
	return;
}

function añadir_pedido(nombre, precio, cantidad){
    //Función que se encarga de imprimir en el recibo cada uno de los platos
	if (cantidad != 0) {
		var texto = document.getElementById('texto_pedido');
		texto.innerHTML = texto.innerHTML + cantidad + " x " + nombre + " = " + (cantidad*precio) + "€<br>"; 
	}
	return precio*cantidad; 
}

function reiniciar_pedido() {
    //Función que se encarga de reiniciar el recibo de un pedido
	document.getElementById('texto_pedido').innerHTML = "";
	document.getElementById('pagar').innerHTML = "";
}

function cerrar_menu() {
	//Función que se encarga de cerrar el menú desplegable de hambuerguesa del movil
	if (window.innerWidth > 600) {
		var open_menu = document.getElementById('abrir_menu');
		var close_menu = document.getElementById('cerrar_menu');
		var links = document.getElementById('main_nav');
		
		open_menu.style.display = 'block';
		close_menu.style.display = 'none';
		links.style.display = 'none';
	}
	return;
}

window.addEventListener("resize", cerrar_menu)

$(document).ready(function (){
	$("#abrir_menu").click(
		function () {
		    //Función que se encarga de abrir el menú desplegable de hamburguesa del movil
			var open_menu = document.getElementById('abrir_menu');
			var close_menu = document.getElementById('cerrar_menu');
			var links = document.getElementById('main_nav');
			
			open_menu.style.display = 'none';
			close_menu.style.display = 'block';
			links.style.display = 'block';
		}
	);

	$("#cerrar_menu").click(
		function (){
		    //Función que se encarga de cerrar el menú desplegable de hambuerguesa del movil
			var open_menu = document.getElementById('abrir_menu');
			var close_menu = document.getElementById('cerrar_menu');
			var links = document.getElementById('main_nav');
			
			open_menu.style.display = 'block';
			close_menu.style.display = 'none';
			links.style.display = 'none';
		}
	);

	$("#menu_seleccion").click(
		function() {
		    //Función que se encarga de manejar el botón del menú de migas de pan de selección
		    //Si el pedido está hecho, no puede volver a pedir
			if (document.getElementById('estado').style.display == 'block') {
				alert("El pedido ya está hecho");
				return 0;
			}
			//Si en cambio quiere volver, borra las cookies de los platos del pedido
			const lista_platos = document.querySelectorAll(".seleccion_art");
			for (let i = 0; i < lista_platos.length; i++) {
				plato = lista_platos[i].getElementsByTagName('p');
				document.cookie = plato[1].id + "=" + plato[0].innerHTML + "," + plato[1].innerHTML + ";" + "path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
			}
			//Usar las clases para poner distintos estilos al menú de selección
			document.getElementById('menu_seleccion').className = 'selec';
			document.getElementById('menu_revision_pago').className = 'no_selec';
			document.getElementById('menu_estado').className = 'no_selec';
			document.getElementById('seleccion').style.display = 'block';
			document.getElementById('revision_pago').style.display = 'none';
			document.getElementById('estado').style.display = 'none';
			reiniciar_pedido();
			
		}
	);
	
	$("#menu_revision_pago").click(
		function() {
		    //Función que se encarga de controlar el paso al menú de revisión y pago
		    //Si has hecho el pedido, no puedes editarlo
			if (document.getElementById('estado').style.display == 'block') {
				alert("El pedido ya está hecho");
				return 0;
			}
		    //Si no has pedido nada, no puedes revisar el pedido
			if (document.getElementById('contador_global').innerHTML == 0) {
				alert("No puedes realizar un pedido vacío");
				return;
			}
            //Variable que tiene el total a pagar
			var total = 0;			
			document.getElementById('menu_seleccion').className = 'no_selec';
			document.getElementById('menu_revision_pago').className = 'selec';
			document.getElementById('menu_estado').className = 'no_selec';
			document.getElementById('seleccion').style.display = 'none';
			document.getElementById('revision_pago').style.display = 'block';
			document.getElementById('estado').style.display = 'none';
			
			//Cálculo del total a pagar
			const lista_platos = document.querySelectorAll(".seleccion_art");
			const lista_nombres_platos = document.querySelectorAll(".seleccion_art h6");
			for (let i = 0; i < lista_platos.length; i++) {
				var plato = lista_platos[i].getElementsByTagName('p');
				crear_cookie_plato(plato[1].id, plato[0].innerHTML, plato[1].innerHTML);
				total += añadir_pedido(lista_nombres_platos[i].innerHTML, plato[0].innerHTML, plato[1].innerHTML);
			}
			document.getElementById('pagar').innerHTML = "Total: " + Math.round(total * 100) / 100 + "€";
			return;
		}
	);
	
	$("#boton_pedido").click(
		function() {
		    //Funciñon que se encarga de controlar el menú de estado
			document.getElementById('seleccion').style.display = 'none';
			document.getElementById('revision_pago').style.display = 'none';
			document.getElementById('estado').style.display = 'block';
			document.getElementById('menu_seleccion').className = 'no_selec';
			document.getElementById('menu_revision_pago').className = 'no_selec';
			document.getElementById('menu_estado').className = 'selec';
			
			//Inicias el contador
			var minute = 9;
			var sec = 59;
			var timer = document.getElementById('contador');
			
			setInterval(function(){
			    //Si los segundos son negativos, los reinicias a 59 y le restas 1 al minuto
				if (sec < 0) {
					minute --;
					sec = 59;
				}
				//Si el segundo es menor que 10, se le concatena 0 delante
				if (sec < 10) {
					sec = "0" + sec; 
				}
				//Si el timer se agota, se cambia el texto y finaliza la función del timer
				if (sec == 0 && minute == 0) {
					timer.innerHTML = "¡El pedido ha llegado!";
					return;
				}
				timer.innerHTML = minute + ":" + sec;
				sec --;
				}, 1000);
		}
	);
}
);

function disminuir(id) {
    //Función que resta uno al contador de cada item del menú
	var parrafo = document.getElementById(id);
	var contador = parrafo.innerHTML;
	var contador_total = document.getElementById('contador_global');
	let contador_total_num = contador_total.innerHTML;
	//Si no hay nada seleccionado, no deja restar más de lo normal
	if (contador == 0) {
		return;
	}
	contador--;
	contador_total_num--;
	parrafo.innerHTML = contador;
	contador_total.innerHTML = contador_total_num;
}

function aumentar(id) {
    //Función que suma uno al contador de cada item
	var parrafo = document.getElementById(id);
	var contador = parrafo.innerHTML;
	var contador_total = document.getElementById('contador_global');
	let contador_total_num = contador_total.innerHTML;

    if (contador_total_num >= 999) {
        alert("Pedido máximo de 999 elementos");
        return;
    }
    
	contador++;
	contador_total_num++;
	parrafo.innerHTML = contador;
	contador_total.innerHTML = contador_total_num; 
}
