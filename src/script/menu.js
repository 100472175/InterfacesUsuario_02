// Lista de los productos disponibles
let cosas = [
    {
        id: 1,
        nombre: 'Cafe con leche',
        imagen: 'media/bebida1.jpg',
        precio: 2.00
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'media/bebida1.jpg',
        precio: 2.00
    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'media/bebida1.jpg',
        precio: 2.30
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen: 'media/bebida1.jpg',
        precio: 1.80
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'media/bebida1.jpg',
        precio: 1.80
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'media/bebida1.jpg',
        precio: 2.3
    },

];
let lista = document.querySelector(".menu_dish");
/*
let abrirCompra = document.querySelector(".menu_cart");
let cerrarCompra = document.querySelector(".menu_cerrar_compra");
let lista_comida = document.querySelector(".menu_list_foos_select");
let body = document.querySelector(".menu");
let totalCarrito = document.querySelector(".menu_Total");
let cantidad = document.querySelector(".menu_cuantity");
let eleme = document.querySelector(".menu_cart_open");
*/
window.addEventListener('load', () => {
    initApp(0);
})

// Inicio de la aplicación, que se ejecuta nada más cargar la página.
function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(cosas).slice(st_elem, (st_elem + 6))
    prods.forEach((value) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('elemento');
        newDiv.innerHTML = `
            <img src="${value.imagen}" alt="imagen_del_producto">
            <div class="menu_elemt_right">
                <div class="titulo">${value.nombre}</div>
                <div class="menos">-</div>
                <div class="precio">${value.precio.toLocaleString()} €</div>
                <div class="mas">+</div>
                <button onclick="aniadirAlCarrito(${value.id - 1})"> Añadir </button>
            </div>`;
        lista.appendChild(newDiv);
    })
}


