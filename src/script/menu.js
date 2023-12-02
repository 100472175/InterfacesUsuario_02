let platos = [
    {id: 1,
    nombre: 'Cafe con leche',
    imagen: 'media/menu/bebida1.jpg',
    precio: 2.00,
    cantidad: 0,
    coste: 0
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0
    },
    {id: 7,
        nombre: 'vdvdvd',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 8,
        nombre: 'Lvvd',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 9,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0
    },
    {
        id: 10,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 11,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 12,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0
    },
    {id: 13,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 14,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 15,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0
    },
    {
        id: 16,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 17,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 18,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0
    },
    {id: 19,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 20,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 21,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0
    },
    {
        id: 22,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 23,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 25,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0
    },
    {id: 26,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 27,
        nombre: 'Latte machiato',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0
    },
    {
        id: 28,
        nombre: 'Capuchino',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0
    },
    {
        id: 29,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 30,
        nombre: 'Cafe solo',
        imagen: 'media/menu/bebida1.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0
    },
    {
        id: 31,
        nombre: 'Chocolate',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0
    },
];

// Lista de los productos disponibles

let lista = document.querySelector(".menu_dish");
let cesta = document.querySelector(".cesta");
let equis = document.querySelector(".menu_cerrar_compra");
let menu_carrito = document.querySelector(".menu_cart_open");
let lista_platos_selecionados = document.querySelector(".menu_list_foos_select");
let totalCarrito = document.querySelector(".menu_Total");
let menu_ir_revision = document.querySelector(".step_2");
let menu = document.querySelector(".menu");
let revisar_ir_menu = document.querySelector(".step_1");
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

window.addEventListener('load', () => {
    menu_carrito.style.display = 'none'
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    sitio_pago.style.display ='none'
    forma_pago.style.display ='none'
    direccion.style.display ='none'
    initApp(0);
})
menu_ir_revision.addEventListener('click', () => {
    menu.style.display = 'none'
    revisar_pedido.style.display = 'block'
    forma_pago.style.display ='none'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    mostarElemento()

})
revisar_ir_menu.addEventListener('click', () => {
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display ='none'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
    initApp(0);
})

revison_button_chek.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='block'
    direccion.style.display ='none'
})
sitio_pago_tienda.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'block'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
})
sitio_pago_domicilio.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'block'
    sitio_pago.style.display ='none'
    direccion.style.display ='none'
})
forma_pago_tarjeta.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='none'
    direccion.style.display ='block'
})
forma_pago_efectivo.addEventListener('click',() =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display ='none'
    direccion.style.display ='block'
})
step_3.addEventListener('click', () =>{
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'noce'
    sitio_pago.style.display ='block'
    direccion.style.display ='none'
})
bebidas.addEventListener('click', () =>{
    initApp(6)
    bebidas.style.background = 'black'
})
delicatessen.addEventListener('click', () =>{
    initApp(12)
})
tartas.addEventListener('click', () =>{
    initApp(18)
})
reposteria.addEventListener('click', () =>{
    initApp(24)
})

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
                <div class="menu_selcion_cantidad">
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${key})">+</button> 
                </div>   
                <button class="menu_saber_mas"> Saber más </button>
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
                <img src="media/menubasura.svg" alt="imagen_del_producto">`;
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
