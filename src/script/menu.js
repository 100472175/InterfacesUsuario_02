// Lista de los productos disponibles
let platos = [{id: 1,
        nombre: 'Cafe con leche',
        imagen: 'media/bebida1.jpg',
        precio: 2.00,
        cantidad: 0
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'media/bebida1.jpg',
        precio: 2.00,
        cantidad: 0
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'media/bebida1.jpg',
        precio: 2.30,
        cantidad: 0
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: 'media/bebida1.jpg',
        precio: 1.80,
        cantidad: 0
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'media/bebida1.jpg',
        precio: 1.80,
        cantidad: 0
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'media/bebida1.jpg',
        precio: 2.3,
        cantidad: 0
    },
];
let lista = document.querySelector(".menu_dish");
let cesta = document.querySelector(".cesta");
let equis = document.querySelector(".menu_cerrar_compra");
let menu_carrito = document.querySelector(".menu_cart_open");

/*
let body = document.querySelector(".menu");
let abrirCompra = document.querySelector(".menu_cart");
let cerrarCompra = document.querySelector(".menu_cerrar_compra");
let lista_comida = document.querySelector(".menu_list_foos_select");
let totalCarrito = document.querySelector(".menu_Total");
let cantidad = document.querySelector(".menu_cuantity");
let eleme = document.querySelector(".menu_cart_open");
*/
window.addEventListener('load', () => {
    initApp(0);
    menu_carrito.style.display = 'none'
    cesta.display.style.display = 'block'
})
let lista_comidas = [];
// Inicio de la aplicación, que se ejecuta nada más cargar la página.


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
                <div class="menu_selcion_cantidad">
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${key})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${key})">+</button> 
                </div>   
                <button class="menu_saber_mas"> Saber más </button>
            </div>`;
        lista.appendChild(newDiv);
    })
}
function cambiarCantidad_suma(key){
    let menu_cantidad = document.querySelector(".menu_cantidad");
    platos[key].cantidad = platos[key].cantidad + 1 ;
    menu_cantidad.innerHTML = platos[key].cantidad;
}
function cambiarCantidad_resta(key){
    if (platos[key].cantidad > 0) {
        let menu_cantidad = document.querySelector(".menu_cantidad");
        platos[key].cantidad = platos[key].cantidad - 1;
        menu_cantidad.innerHTML = platos[key].cantidad;
    }
}
cesta.addEventListener('click', () => {
    menu_carrito.style.display = 'block'
    cesta.style.display = 'none'
})
equis.addEventListener('click', () => {
    menu_carrito.style.display = 'none'
    cesta.style.display = 'block'
})
/*
// Función para añadir un elemento al carrito
function aniadirAlCarrito(key) {

    if (lista_comidas[key] == null) {
        lista_comidas[key] = JSON.parse(JSON.stringify(cosas[key]));
        lista_comidas[key].cantidad = 1;
    } else {
        lista_comidas[key].cantidad = lista_comidas[key].cantidad + 1;
        lista_comidas[key].precio = lista_comidas[key].cantidad * cosas[key].precio;

    }
    recargaElemento();
}
*/

/*
// Función para recargar el carrito
function recargaElemento() {
    lista_comida.innerHTML = '';
    let cuenta = 0;
    let precioTotal = 0;
    lista_comidas.forEach((value, key) => {
        precioTotal = precioTotal + value.precio;
        cuenta = cuenta + value.cantidad;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div>${value.nombre}</div>
            <div>${cosas[key].precio} €</div>
            <div>${value.precio.toLocaleString()} €</div>
            <div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad - 1})"> — </button>
                <div class="contador">${value.cantidad}</div>
                <button class="contador" onclick="cambiaCantidad(${key}, ${value.cantidad + 1})"> + </button>      
            </div>`;
            lista_comida.appendChild(newDiv);
        }
    })
    totalCarrito.innerText = "Total → ".concat(precioTotal.toLocaleString()).concat(' €');
    precio_compra = precioTotal;
    cantidad.innerText = cuenta;
}

 */
/*
// Función para mostrar los elementos del carrito en el "paso 2"
function mostrarElemento() {
    reserva.innerHTML = '';
    lista_comidas.forEach((value, key) => {
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="images/${value.imagen}" alt="imagen_del_producto3"></div>
            <div>${value.nombre}</div>
            <div>${cosas[key].precio} €</div>
            <div>${value.precio.toLocaleString()} €</div>
            <div class="contador">${value.cantidad} u</div>`;
            reserva.appendChild(newDiv);
        }
    })
    precio_total.innerText = "Total: ".concat(precio_compra.toLocaleString()).concat(' €');
}
*/


/*
function cambiaCantidad_menu(key, cantidad) {
    let menu_cantidad = document.querySelector(".menu_cantidad");
    if (lista_comidas[key] == null) {
        //lista_comidas[key] = JSON.parse(JSON.stringify(cosas[key]));
        lista_comidas[key] = platos[key]
        lista_comidas[key].cantidad = 1;
        platos[key].cantidad = 1;
    } else {
        lista_comidas[key].cantidad = cantidad;
        lista_comidas[key].precio = cantidad * platos[key].precio;
        platos[key].cantidad = cantidad;
        menu_cantidad.innerHTML = lista_comidas[key].cantidad;
    }
    recargaElemento();
}

 */

