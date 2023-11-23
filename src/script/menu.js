// Lista de los productos disponibles
let cosas = [
    {
        id: 1,
        nombre: 'Cafe con leche',
        imagen: 'menu/cafe1.jpg',
        precio: 2.00
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'menu/cafe2.jpg',
        precio: 2.00
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'menu/cafe3.jpg',
        precio: 2.30
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: 'menu/cafe4.jpg',
        precio: 1.80
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'menu/cafe5.jpg',
        precio: 1.80
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'menu/cafe6.jpg',
        precio: 2.3
    },
    {
        id: 7,
        nombre: 'Batido de chocolate negro',
        imagen: 'bebida1.jpg',
        precio: 4.50
    },
    {
        id: 8,
        nombre: 'Batido de chocolate',
        imagen: 'bebida2.jpg',
        precio: 4.50
    },
    {
        id: 9,
        nombre: 'Batido de strachatela',
        imagen: 'bebida3.jpg',
        precio: 4.50
    },
    {
        id: 10,
        nombre: 'Batido de vainilla',
        imagen: 'bebida4.jpg',
        precio: 4.50
    },
    {
        id: 11,
        nombre: 'Batido de strachatela',
        imagen: 'bebida5.jpg',
        precio: 4.5
    },
    {
        id: 12,
        nombre: 'Batido de nubes',
        imagen: 'bebida6.jpg',
        precio: 3
    },
    {
        id: 13,
        nombre: 'Macarons de chocolate',
        imagen: 'delicatessen1.jpg',
        precio: 2.5
    },
    {
        id: 14,
        nombre: 'Mini delicias',
        imagen: 'delicatessen2.jpg',
        precio: 3.5
    },
    {
        id: 15,
        nombre: 'Bonbones',
        imagen: 'delicatessen3.jpg',
        precio: 1.5
    },
    {
        id: 16,
        nombre: 'Macarons de oreo',
        imagen: 'delicatessen4.jpg',
        precio: 2.5
    },
    {
        id: 17,
        nombre: 'Mini tartitas',
        imagen: 'delicatessen5.jpg',
        precio: 4.5
    },
    {
        id: 18,
        nombre: 'Macarons de fresa',
        imagen: 'delicatessen6.jpg',
        precio: 2.5
    },
    {
        id: 19,
        nombre: 'Tarta mixta',
        imagen: 'tartas1.jpg',
        precio: 10
    },
    {
        id: 20,
        nombre: 'Tarta de nata',
        imagen: 'tartas2.jpg',
        precio: 10
    },
    {
        id: 21,
        nombre: 'Tarta de fresa',
        imagen: 'tartas3.jpg',
        precio: 10
    },
    {
        id: 22,
        nombre: 'Tarta de oreo',
        imagen: 'tartas4.jpg',
        precio: 10
    },
    {
        id: 23,
        nombre: 'Tarta de vainilla',
        imagen: 'tartas5.jpg',
        precio: 10
    },
    {
        id: 24,
        nombre: 'Tarta de chocolate',
        imagen: 'tartas6.jpg',
        precio: 10
    },
    {
        id: 25,
        nombre: 'Donas glaseados',
        imagen: 'Reposteria1.jpg',
        precio: 3.5
    },
    {
        id: 26,
        nombre: 'Tortitas especiales',
        imagen: 'Reposteria2.jpg',
        precio: 4.5
    },
    {
        id: 27,
        nombre: 'Tortitas con fresas',
        imagen: 'Reposteria3.jpg',
        precio: 4.5
    },
    {
        id: 28,
        nombre: 'Gofres',
        imagen: 'Reposteria4.jpg',
        precio: 4.5
    },
    {
        id: 29,
        nombre: 'Totitas con chocolate',
        imagen: 'Reposteria5.jpg',
        precio: 4.5
    },
    {
        id: 30,
        nombre: 'Crepes',
        imagen: 'Reposteria6.jpg',
        precio: 4.5
    },
];

let abrirCompra = document.querySelector(".menu_cart");
let cerrarCompra = document.querySelector(".menu_cerrar_compra");
let lista = document.querySelector(".menu_dish");
let lista_comida = document.querySelector(".menu_list_foos_select");
let body = document.querySelector(".menu");
let totalCarrito = document.querySelector(".menu_Total");
let cantidad = document.querySelector(".menu_cuantity");
let eleme = document.querySelector(".menu_cart_open");

window.addEventListener('load', () => {
    initApp(0);
})
abrirCompra.addEventListener('click', () => {
    body.classList.add('active');
})
cerrarCompra.addEventListener('click', () => {
    body.classList.remove('active');
})

let lista_comidas = [];

// Inicio de la aplicación, que se ejecuta nada más cargar la página.
function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(cosas).slice(st_elem, (st_elem + 6))
    prods.forEach((value, key) => {
        //
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="./images/${value.imagen}" alt="imagen_del_producto">
            <div class="titulo">${value.nombre}</div>
            <div class="precio">${value.precio.toLocaleString()} €</div>
            <button onclick="aniadirAlCarrito(${value.id - 1})"> Añadir </button>`;
        lista.appendChild(newDiv);
    })
}

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

// Cambiar la cantidad de un elemento del carrito
function cambiaCantidad(key, cantidad) {
    if (cantidad === 0) {
        delete lista_comidas[key];
    } else {
        lista_comidas[key].cantidad = cantidad;
        lista_comidas[key].precio = cantidad * cosas[key].precio;
    }
    recargaElemento();
}