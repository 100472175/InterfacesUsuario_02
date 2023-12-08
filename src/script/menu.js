let None;
let platos = [
        {id: 1,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg','media/menu/almendra.svg']
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',None]

    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.35,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/Huevos.svg','media/menu/almendra.svg']
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: []
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {id: 7,
        nombre: 'vdvdvd',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 8,
        nombre: 'Lvvd',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 9,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 10,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 11,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 12,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {id: 13,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 14,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 15,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 16,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 17,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 18,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {id: 19,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 20,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 21,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 22,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 23,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 25,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {id: 26,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 27,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 28,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 29,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 30,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
    {
        id: 31,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['G','L','H','F']
    },
];

// Lista de los productos disponibles

let lista = document.querySelector(".menu_dish");
let cesta = document.querySelector(".cesta");
let equis = document.querySelector(".menu_cerrar_compra");
let menu_carrito = document.querySelector(".menu_cart_open");
let lista_platos_selecionados = document.querySelector(".menu_list_foos_select");
let totalCarrito = document.querySelector(".menu_Total");
let step_2 = document.querySelector(".step_2");
let menu = document.querySelector(".menu");
let step_1 = document.querySelector(".step_1");
let revisar_pedido = document.querySelector(".revisar_pedido")
let lista_revision = document.querySelector(".revision_platos")
let totalrevision = document.querySelector(".revision_Total");
let lista_platos_selecionados_revision = document.querySelector(".revision_list_food_select");
let forma_pago = document.querySelector(".forma_pago");
let sitio_pago = document.querySelector(".sitio_pago");
let revison_button_chek = document.querySelector(".revision_button_chek");
let sitio_pago_tienda = document.querySelector(".sitio_pago_tienda");
let sitio_pago_domicilio = document.querySelector(".sitio_pago_domicilio");
let direccion = document.querySelector(".direccion");
let forma_pago_tarjeta = document.querySelector(".forma_pago_tarjeta");
let forma_pago_efectivo = document.querySelector(".forma_pago_efectivo");
let step_3 = document.querySelector(".step_3");
let step_4 = document.querySelector(".step_4");
let bebidas = document.querySelector(".menu_sweet_drinks");
let delicatessen = document.querySelector(".menu_delicatessen");
let tartas = document.querySelector(".menu_cakes");
let reposteria = document.querySelector(".menu_bakery");
let cafe = document.querySelector(".menu_coffe");
let cantidad = document.querySelector(".menu_cuantity");
let barra_progreso = document.querySelector(".progess_bar_line2");
let espera_pedido = document.querySelector(".espera_pedido");
let saber_mas = document.querySelector(".menu_saber_mas");
let alerg = document.querySelector(".alerg");
function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(platos).slice(st_elem, (st_elem + 6));
    prods.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="${value.imagen}" alt="imagen_del_producto">
            <div class="menu_elemt_right">
                <div class="titulo">${value.nombre}</div> 
                <div class="precio">${value.precio.toLocaleString()} €</div>
                <div class="alerg"><img src="${value.alergenos[0]}" alt=""> <img src="${value.alergenos[1]}" alt=""> <img src="${value.alergenos[2]}" alt=""> <img src="${value.alergenos[3]}" alt=""></div>
                <div class="menu_selcion_cantidad">
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${key})">+</button> 
                </div>   
                <!--<button class="menu_saber_mas"> Saber más </button>-->
            </div>`;
        lista.appendChild(newDiv);
    })
    recargaElemento();
}
window.addEventListener('load', () => {
    bebidas.style.background = 'transparent'
    cafe.style.background = '#E6CDBA'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    menu_carrito.style.display = 'none'
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    sitio_pago.style.display ='none'
    forma_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='10vw'
    initApp(0);
})
saber_mas.addEventListener('click', () => {
        bebidas.style.background = 'transparent'
        cafe.style.background = '#E6CDBA'
        tartas.style.background = 'transparent'
        delicatessen.style.background = 'transparent'
        reposteria.style.background = 'transparent'
        menu_carrito.style.display = 'none'
        menu.style.display = 'block'
        revisar_pedido.style.display = 'none'
        sitio_pago.style.display ='none'
        forma_pago.style.display ='none'
        direccion.style.display ='none'
        espera_pedido.style.display = 'none'
        barra_progreso.style.width ='10vw'
        initApp2(0);
    })

step_2.addEventListener('click', () => {
    menu.style.display = 'none'
    revisar_pedido.style.display = 'block'
    forma_pago.style.display ='none'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='25vw'
    mostarElemento()

})
step_1.addEventListener('click', () => {
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display ='none'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='10vw'
    initApp(0);
})

revison_button_chek.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='block'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='25vw'
})
sitio_pago_tienda.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'block'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='40vw'
})
sitio_pago_domicilio.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'block'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='40vw'
})
forma_pago_tarjeta.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='none'
    direccion.style.display ='block'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='40vw'
})
forma_pago_efectivo.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='none'
    direccion.style.display ='block'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='40vw'
})
step_3.addEventListener('click', () =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='block'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='34vw'
})
step_4.addEventListener('click', () =>{
        menu.style.display = 'none'
        revisar_pedido.style.display = 'none'
        forma_pago.style.display = 'none'
        sitio_pago.style.display ='none'
        direccion.style.display ='none'
        espera_pedido.style.display = 'block'
        barra_progreso.style.width ='50vw'
    }
)
cafe.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = '#E6CDBA'
    tartas.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    initApp(6)

})
bebidas.addEventListener('click', () =>{
    bebidas.style.background = '#E6CDBA'
    cafe.style.background = 'transparent'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    initApp(6)

})
delicatessen.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = 'transparent'
    tartas.style.background = 'transparent'
    delicatessen.style.background = '#E6CDBA'
    reposteria.style.background = 'transparent'
    initApp(12)
})
tartas.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = 'transparent'
    tartas.style.background = '#E6CDBA'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    initApp(18)
})
reposteria.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = 'transparent'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = '#E6CDBA'
    initApp(24)
})



function initApp2(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(platos).slice(st_elem, (st_elem + 6));
    prods.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="${value.imagen}" alt="imagen_del_producto">
            <div class="menu_elemt_right">
                <div class="titulo">${value.nombre}</div> 
                <div class="precio">${value.precio.toLocaleString()} €</div>
                <div class="alerg"><img src="${value.alergenos[0]}" alt=""> <img src="${value.alergenos[1]}" alt=""> <img src="${value.alergenos[2]}" alt=""> <img src="${value.alergenos[3]}" alt=""></div>
                <div class="menu_selcion_cantidad">
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${key})">+</button> 
                </div>   
                <!--<button class="menu_saber_mas"> Saber más </button>-->
            </div>`;
        lista.appendChild(newDiv);
    })
    recargaElemento();
}

cesta.addEventListener('click', () => {
    menu_carrito.style.display = 'block'
})
equis.addEventListener('click', () => {
    menu_carrito.style.display = 'none'

})



// Función para recargar el carrito
function recargaElemento() {
    lista_platos_selecionados.innerHTML ='';
    let cuenta = 0;
    let precioTotal = 0;
    let prods = Array.from(platos);
    prods.forEach((value, key) => {
        precioTotal = precioTotal + value.coste;
        cuenta = cuenta + value.cantidad;
        if (value.cantidad > 0) {
            value.coste = value.precio * value.cantidad
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.nombre}</div>
                <div class="precio"> ${value.coste} €</div>
                <div>
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${key})">+</button> 
                </div>`;
        lista_platos_selecionados.appendChild(newDiv);
        }
    })
    totalCarrito.innerText = "Total: ".concat(precioTotal.toLocaleString()).concat(' €');
    cantidad.innerText = cuenta;
}

function mostarElemento() {
    lista_revision.innerHTML ='';
    let prods = Array.from(platos);
    prods.forEach((value, key) => {
        if (value.cantidad > 0) {
            value.coste = value.precio * value.cantidad
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="${value.imagen}" alt="imagen_del_producto">
                <div>${value.nombre}</div>
                <div class="precio"> ${value.coste} €</div>
                <div>
                    <button class="menu_menos" onclick="cambiarCantidad_resta_m(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma_m(${key})">+</button> 
                </div>
                <img src="media/menu/basura.svg" alt="imagen_del_producto">`;
            lista_revision.appendChild(newDiv);
        }
        revisfinal()
    })
}
function revisfinal() {
    lista_platos_selecionados_revision.innerHTML ='';
    let precioTotal = 0;
    let prods = Array.from(platos);
    prods.forEach((value, key) => {
        precioTotal = precioTotal + value.coste;
        if (value.cantidad > 0) {
            value.coste = value.precio * value.cantidad
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div>${value.nombre}</div>
                <div class="precio"> ${value.coste} €</div>
                <div> ${value.cantidad} u</div>
                `;
            lista_platos_selecionados_revision.appendChild(newDiv);
        }
    })
    totalrevision.innerText = "Total ".concat(precioTotal.toLocaleString()).concat(' €');
}

function cambiarCantidad_suma(key){
    platos[key].cantidad = platos[key].cantidad + 1 ;
    platos[key].coste = platos[key].precio * platos[key].cantidad
    initApp(0);
}
function cambiarCantidad_resta(key){
    if (platos[key].cantidad > 0) {
        platos[key].cantidad = platos[key].cantidad - 1;
        platos[key].coste = platos[key].precio * platos[key].cantidad
        initApp(0);
    }
}

function cambiarCantidad_suma_m(key){
    platos[key].cantidad = platos[key].cantidad + 1 ;
    platos[key].coste = platos[key].precio * platos[key].cantidad
    mostarElemento();
}
function cambiarCantidad_resta_m(key){
    if (platos[key].cantidad > 0) {
        platos[key].cantidad = platos[key].cantidad - 1;
        platos[key].coste = platos[key].precio * platos[key].cantidad
        mostarElemento();
    }
}

function check_card_form() {
	event.preventDefault();
	var name_input = document.getElementById('menu_card_name');
	var surname_input = document.getElementById('menu_card_surname');
	var number_input = document.getElementById('menu_card_number');
	var date_input = document.getElementById('menu_card_date');
	var cvv_input = document.getElementById('menu_card_cvv');
	
	var menu_card = document.getElementsByClassName("pago_tarjeta")[0];
	
	if (check_card_name(name_input.value) == false) {
		global_error_message(1, "Nombre del titular no válido", menu_card);
		return false;
	}
	
	if (check_card_surname(surname_input.value) == false) {
		global_error_message(1, "Apellido del titular no válido", menu_card);
		return false;
	}
	
	if (check_card_number(number_input.value) == false) {
		global_error_message(1, "Número de la tarjeta no válido", menu_card);
		return false;
	}
	
	if (check_card_date(date_input.value) == false) {
		global_error_message(1, "Fecha de la tarjeta no válida", menu_card);
		return false;
	}
	
	if (check_card_cvv(cvv_input.value) == false) {
		global_error_message(1, "CVV de la tarjeta no válido", menu_card);
		return false;
	}
	
	name_input.value = "";
	surname_input.value = "";
	number_input.value = "";
	date_input.value = "";
	cvv_input.value = "";
	alert("Tarjeta correcta");
	return true	
}

function check_card_name(name) {
	return name.length != 0;
}

function check_card_surname(surname) {
	return surname.length != 0;
}

function check_card_number(number) {
	const re = /^[0-9]{4}\-[0-9]{4}\-[0-9]{4}\-[0-9]{4}/;
	return re.test(number);
}

function check_card_date(date) {
	const re = /^(0[1-9]{1})|(1[0-2]{1})\/[0-9]{2}$/;
	return re.test(date);
}

function check_card_cvv(cvv) {
	const re = /^[0-9]{3}$/;
	return re.test(cvv);
}
