let platos = [
        {id: 1,
        nombre: 'Cafe con leche',
        imagen: 'media/menu/cafe1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 2,
        nombre: 'Latte machiato',
        imagen: 'media/menu/cafe2.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']

    },
    {
        id: 3,
        nombre: 'Capuchino',
        imagen: 'media/menu/cafe3.jpg',
        precio: 2.35,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 4,
        nombre: 'Cafe con hielo',
        imagen:'media/menu/cafe4.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos:  [null,null,null,null],
        alerg: []
    },
    {
        id: 5,
        nombre: 'Cafe solo',
        imagen: 'media/menu/cafe5.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: [null,null,null,null],
        alerg: []
    },
    {
        id: 6,
        nombre: 'Chocolate',
        imagen: 'media/menu/cafe6.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {id: 7,
        nombre: 'Batido de chocolate negro',
        imagen: 'media/menu/bebida1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 8,
        nombre: 'Batido de chocolate',
        imagen: 'media/menu/bebida2.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 9,
        nombre: 'Batido de strachatela',
        imagen: 'media/menu/bebida3.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 10,
        nombre: 'Batido de vainilla',
        imagen:'media/menu/bebida4.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 11,
        nombre: 'Batido de strachatela',
        imagen: 'media/menu/bebida5.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {
        id: 12,
        nombre: 'Batido de nubes',
        imagen: 'media/menu/bebida6.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/leche.svg',null,null,null],
        alerg: ['L']
    },
    {id: 13,
        nombre: 'Macarons de chocolate',
        imagen: 'media/menu/delicatessen1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/Huevos.svg','media/menu/almendra.svg',null],
        alerg: ['G','H','F']
    },
    {
        id: 14,
        nombre: 'Mini delicias',
        imagen: 'media/menu/delicatessen2.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 15,
        nombre: 'Bombones',
        imagen: 'media/menu/delicatessen3.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/Huevos.svg','media/menu/leche.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 16,
        nombre: 'Macarons de oreo',
        imagen:'media/menu/delicatessen4.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/Huevos.svg','media/menu/almendra.svg',null],
        alerg: ['G','F','H']
    },
    {
        id: 17,
        nombre: 'Mini tartitas',
        imagen: 'media/menu/delicatessen5.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']

    },
    {
        id: 18,
        nombre: 'Macarons de fresa',
        imagen: 'media/menu/delicatessen6.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos:['media/menu/trigo.svg','media/menu/Huevos.svg','media/menu/almendra.svg',null],
        alerg: ['G','F','H']
    },
    {id: 19,
        nombre: 'Tarta mixta',
        imagen: 'media/menu/tartas1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 20,
        nombre: 'Tarta de nata',
        imagen: 'media/menu/tartas2.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 21,
        nombre: 'Tarta de fresa',
        imagen: 'media/menu/tartas3.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 22,
        nombre: 'Tarta de oreo',
        imagen:'media/menu/tartas4.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 23,
        nombre: 'Tarta de vainilla',
        imagen: 'media/menu/tartas5.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 24,
        nombre: 'Tarta de chocolate',
        imagen: 'media/menu/tartas6.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 25,
        nombre: 'Donas glaseadas',
        imagen: 'media/menu/Reposteria1.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 26,
        nombre: 'Tortitas especiales',
        imagen: 'media/menu/Reposteria2.jpg',
        precio: 2.00,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 27,
        nombre: 'Tortitas con fresas',
        imagen: 'media/menu/Reposteria3.jpg',
        precio: 2.30,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 28,
        nombre: 'Gofres',
        imagen:'media/menu/Reposteria4.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 29,
        nombre: 'Totitas con chocolate',
        imagen: 'media/menu/Reposteria5.jpg',
        precio: 1.80,
        cantidad: 0,
        coste: 0,
        alergenos:  ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
    {
        id: 30,
        nombre: 'Crepes',
        imagen: 'media/menu/Reposteria6.jpg',
        precio: 2.3,
        cantidad: 0,
        coste: 0,
        alergenos: ['media/menu/trigo.svg','media/menu/leche.svg','media/menu/Huevos.svg',null],
        alerg: ['G','L','H']
    },
];

// Lista de los productos disponibles
let body =document.querySelector("body");
let step_1 = document.querySelector("#step_1");
let step_2 = document.querySelector("#step_2");
let step_3 = document.querySelector("#step_3");
let step_4 = document.querySelector("#step_4");
let barra_progreso = document.querySelector(".progess_bar_line2");
let barra_progreso_cuadro = document.querySelector(".progess_bar");

let menu = document.querySelector("#menu");
let cafe = document.querySelector("#menu_coffe");
let bebidas = document.querySelector("#menu_sweet_drinks");
let delicatessen = document.querySelector("#menu_delicatessen");
let tartas = document.querySelector("#menu_cakes");
let reposteria = document.querySelector("#menu_bakery");
let go_back_inicio = document.querySelector("#go_back_inicio");


let go_back_menu = document.querySelector("#go_back_menu");
let go_back_revisar = document.querySelector("#go_back_revisar");
let go_back_sitio = document.querySelector("#go_back_sitio");
let go_back_f_pago = document.querySelector("#go_back_f_pago");
let go_back_direccion = document.querySelector("#go_back_direcion");
let lista = document.querySelector(".menu_dish");
let cesta = document.querySelector(".cesta");
let equis = document.querySelector(".menu_cerrar_compra");
let menu_carrito = document.querySelector(".menu_cart_open");
let lista_platos_selecionados = document.querySelector(".menu_list_foos_select");
let totalCarrito = document.querySelector(".menu_Total");

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
let cantidad = document.querySelector(".menu_cuantity");
let espera_pedido = document.querySelector(".espera_pedido");
let saber_mas = document.querySelector(".menu_saber_mas");
let pago_tarjeta = document.querySelector(".pago_tarjeta");
let direccion_seleccion = document.querySelector(".direccion_selccion button");
let menu_button_chek= document.querySelector(".menu_button_chek");
let menu_card_confirm= document.querySelector("#menu_card_confirm");
let revision_total = document.querySelector(".revision_Total");
let confirmar_pedido_c = document.querySelector(".confirmar_pedido_c");
let tick1 =document.querySelector("#cuadro1");
let tick2 =document.querySelector("#cuadro2");
let tick3 =document.querySelector("#cuadro3");
let tick4 =document.querySelector("#cuadro4");
let saber_mas_select = 0;
let menu_select = 1;
let t1 = 0;
let t2 = 0;
let t3 = 0;
let t4 = 0;
let lista_alergenos  = [];
let posicion_bar_progreso= 0;


window.addEventListener('load', () => {
    /*Seleccion menu de cafes*/
    bebidas.style.background = 'transparent'
    cafe.style.background = '#E6CDBA'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    /*A parece solo el primer paso*/
    menu_carrito.style.display = 'none'
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    sitio_pago.style.display ='none'
    forma_pago.style.display ='none'
    direccion.style.display ='none'
    espera_pedido.style.display = 'none'
    barra_progreso.style.width ='10vw'
    pago_tarjeta.style.display = 'none'
    initApp(0);
})

/*Selección del alergeno que no quieres que aparezca*/
tick1.addEventListener('click', () =>{
    if (t1 === 0) {
        tick1.src = "media/menu/tick.png"
        t1 = 1;
        lista_alergenos.push('G')
    } else {
        tick1.src = "media/menu/cuadrado.png"
        t1 = 0;
        lista_alergenos = lista_alergenos.filter(alergia => alergia != 'G')
    }
    saber_menu()
})
tick2.addEventListener('click', () =>{
    if (t2 === 0) {
        tick2.src = "media/menu/tick.png"
        t2 = 1;
        lista_alergenos.push('L')
    } else {
        tick2.src = "media/menu/cuadrado.png"
        t2 = 0;
        lista_alergenos = lista_alergenos.filter(alergia => alergia != 'L')
    }
    saber_menu()
})

tick3.addEventListener('click', () =>{
    if (t3 === 0) {
        tick3.src = "media/menu/tick.png"
        t3 = 1;
        lista_alergenos.push('H')
    } else {
        tick3.src = "media/menu/cuadrado.png"
        t3 = 0;
        lista_alergenos = lista_alergenos.filter(alergia => alergia != 'H')
    }
    saber_menu()
})
tick4.addEventListener('click', () =>{
    if (t4 === 0) {
        tick4.src = "media/menu/tick.png"
        t4 = 1;
        lista_alergenos.push('F')
    } else {
        tick4.src = "media/menu/cuadrado.png"
        t4 = 0;
        lista_alergenos = lista_alergenos.filter(alergia => alergia != 'F')
    }
    saber_menu()

})

/*Seleccion de distintos menus*/
cafe.addEventListener('click', () =>{
    cafe.style.background = '#E6CDBA'
    bebidas.style.background = 'transparent'
    tartas.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    menu_select = 1;
    initApp(0)

})
bebidas.addEventListener('click', () =>{
    cafe.style.background = 'transparent'
    bebidas.style.background = '#E6CDBA'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    menu_select = 2;
    initApp(6)

})
delicatessen.addEventListener('click', () =>{
    cafe.style.background = 'transparent'
    bebidas.style.background = 'transparent'
    tartas.style.background = 'transparent'
    delicatessen.style.background = '#E6CDBA'
    reposteria.style.background = 'transparent'
    menu_select = 3;
    initApp(12)
})
tartas.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = 'transparent'
    tartas.style.background = '#E6CDBA'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = 'transparent'
    menu_select = 4;
    initApp(18)
})

reposteria.addEventListener('click', () =>{
    bebidas.style.background = 'transparent'
    cafe.style.background = 'transparent'
    tartas.style.background = 'transparent'
    delicatessen.style.background = 'transparent'
    reposteria.style.background = '#E6CDBA'
    menu_select = 5;
    initApp(24)
})
saber_mas.addEventListener('click', () => {
    if (saber_mas_select === 0) {
        if (menu_select === 1) {
            initApp2(0);
        } else if (menu_select === 2) {
            initApp2(6);
        } else if (menu_select === 3) {
            initApp2(12);
        } else if (menu_select === 4) {
            initApp2(18);
        } else if (menu_select === 5) {
            initApp2(24);
        }
        saber_mas_select = 1;
    } else {
        if (menu_select === 1) {
            initApp(0);
        } else if (menu_select === 2) {
            initApp(6);
        } else if (menu_select === 3) {
            initApp(12);
        } else if (menu_select === 4) {
            initApp(18);
        } else if (menu_select === 5) {
            initApp(24);
        }
        saber_mas_select = 0;
    }
})
cesta.addEventListener('click', () => {
    menu_carrito.style.display = 'block'
})
equis.addEventListener('click', () => {
    menu_carrito.style.display = 'none'
})

step_1.addEventListener('click', () => {
    if (posicion_bar_progreso !== 6){
        cambiar_a_select_menu();
    }
    else{
        global_error_message(1, "Ya he hecho el pedido no puedo volver atras", menu);
    }
})
menu_button_chek.addEventListener('click',() =>{
    if (cantidad.textContent === "0") {
        global_error_message(1, "No ha seleccionado ningún elemento", menu);
    }
    else {
        cambiar_a_revision_pedido();
    }
})
step_2.addEventListener('click', () => {
    if (posicion_bar_progreso === 6) {
        global_error_message(1, "Ya he hecho el pedido no puedo volver atras", menu);
    }
    else if (cantidad.textContent === "0") {
        global_error_message(1, "No ha seleccionado ningún elemento", menu);
    }
    else {
        cambiar_a_revision_pedido();
    }

})
revison_button_chek.addEventListener('click',() =>{
    if (revision_total.textContent === "Total 0 €") {
        global_error_message(1, "No ha seleccionado ningún elemento", revisar_pedido);
    } else {
        cambiar_a_sitio_pago();
    }
})
step_3.addEventListener('click', () =>{
    if (posicion_bar_progreso === 6) {
        global_error_message(1, "Ya he hecho el pedido no puedo volver atras", menu);
    }
    else if (posicion_bar_progreso === 0) {
        global_error_message(1, "Primero hay que revisar el pedido", menu);
    }
    else if (posicion_bar_progreso === 1  && revision_total.textContent === "Total 0 €"){
        global_error_message(1, "Hay que seleccionar un plato", revisar_pedido);
    }
    else{
        cambiar_a_sitio_pago();
    }
})

step_4.addEventListener('click', () =>{
    if (posicion_bar_progreso === 0 ) {
        global_error_message(1, "Primero hay que revisar el pedido", menu);
    }
    else{
        global_error_message(1, "Primero hay que pagar el pedido", menu);
    }
})

sitio_pago_tienda.addEventListener('click',() =>{
    cambiar_a_forma_pago()
})
sitio_pago_domicilio.addEventListener('click',() =>{
    cambiar_a_forma_pago();
})

forma_pago_tarjeta.addEventListener('click',() =>{
    cambiar_a_direccion();
})
forma_pago_efectivo.addEventListener('click',() =>{
    cambiar_a_espera_pedido();
})
direccion_seleccion.addEventListener('click',() =>{
    cambiar_a_tarjeta();
})
menu_card_confirm.addEventListener('click', () =>{
    if (check_card_form() === true) {

        confirmar_pedido_c.style.display = 'block'
    }
})
go_back_inicio.addEventListener('click' ,() =>{
    window.location.href= "landing.html"
})
go_back_menu.addEventListener('click' ,() =>{
    cambiar_a_select_menu()
})
go_back_revisar.addEventListener('click' ,() =>{
    cambiar_a_revision_pedido()
})
go_back_sitio.addEventListener('click' ,() =>{
    cambiar_a_sitio_pago()
})
go_back_f_pago.addEventListener('click' ,() =>{
    cambiar_a_forma_pago()
})
go_back_direccion.addEventListener('click' ,() =>{
    cambiar_a_direccion()
})

function cambiar_a_select_menu() {
    barra_progreso_cuadro.style.backgroundColor ='#FFFBF8'
    menu.style.display = 'block'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'none'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    barra_progreso.style.width = '10vw'
    menu_select = 1;
    body.style.backgroundImage = ''
    posicion_bar_progreso = 0;
    initApp(0);
}
function cambiar_a_revision_pedido() {
    barra_progreso_cuadro.style.backgroundColor ='#FFFBF8'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'block'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'none'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    barra_progreso.style.width = '25vw'
    body.style.backgroundImage = ''
    posicion_bar_progreso = 1;
    mostarElemento()
}

function cambiar_a_sitio_pago() {
    barra_progreso_cuadro.style.backgroundColor ='#F6EDE6'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'block'
    direccion.style.display = 'none'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    barra_progreso.style.width = '38vw'
    body.style.backgroundImage = "url('media/menu/fondo_sitio.png')"
    body.style.backgroundSize = 'cover'
    posicion_bar_progreso = 2;
}
function cambiar_a_forma_pago() {
    barra_progreso_cuadro.style.backgroundColor =' #F6EDE6'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'block'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'none'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    barra_progreso.style.width = '38vw'
    body.style.backgroundImage = "url('media/menu/fondo_forma_pago.webp')"
    body.style.backgroundSize = 'cover'
    posicion_bar_progreso = 3;
}
function cambiar_a_direccion() {
    barra_progreso_cuadro.style.backgroundColor =' #F6EDE6'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'block'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    barra_progreso.style.width = '38vw'
    body.style.backgroundImage = "url(media/menu/fondo_direccion.webp)"
    posicion_bar_progreso = 4;
}
function cambiar_a_tarjeta() {
    barra_progreso_cuadro.style.backgroundColor =' #F6EDE6'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'none'
    espera_pedido.style.display = 'none'
    pago_tarjeta.style.display = 'block'
    body.style.backgroundImage = "url('media/menu/fondo_tarjeta.png')"
    body.style.backgroundSize = 'cover'
    barra_progreso.style.width = '38vw'
    posicion_bar_progreso = 5;
}
function cambiar_a_espera_pedido() {
    barra_progreso_cuadro.style.backgroundColor =' #F6EDE6'
    menu.style.display = 'none'
    revisar_pedido.style.display = 'none'
    forma_pago.style.display = 'none'
    sitio_pago.style.display = 'none'
    direccion.style.display = 'none'
    pago_tarjeta.style.display = 'none'
    espera_pedido.style.display = 'block'
    barra_progreso.style.width = '50vw'
    body.style.backgroundImage = ''
    posicion_bar_progreso = 6;
    setInterval(startTimer, 1000);
}
function initApp(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(platos).slice(st_elem, (st_elem + 6));
    prods.forEach((value) => {
        let elem_in = 0;
        for (let i = 0; i < lista_alergenos.length; i ++){
            if (value.alerg.includes(lista_alergenos[i])){
                elem_in = 1;
            }}
        if (elem_in === 0){
            let newDiv = document.createElement('div');
            newDiv.classList.add('elemento');
            newDiv.innerHTML = `
            <img class="elem_img"  src="${value.imagen}" alt="imagen_del_producto">
            <div class="menu_elemt_right">
                <div class="titulo">${value.nombre}</div> 
                <div class="precio">${value.precio.toLocaleString()} €</div>
                <div class="menu_selcion_cantidad">
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${value.id})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${value.id})">+</button> 
                </div>   
            </div>`;
            lista.appendChild(newDiv);
        }
    })
    recargaElemento();
}

function initApp2(st_elem) {
    while (lista.hasChildNodes()) {
        lista.removeChild(lista.firstChild);
    }
    let prods = Array.from(platos).slice(st_elem, (st_elem + 6));
    prods.forEach((value) => {
        let elem_in = 0;
        for (let i = 0; i < lista_alergenos.length; i ++){
            if (value.alerg.includes(lista_alergenos[i])){
                elem_in = 1;
            }}
        if (elem_in === 0) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('elemento');
            newDiv.innerHTML = `
                <img class="elem_img" src="${value.imagen}" alt="imagen_del_producto">
                <div class="menu_elemt_right_2">
                    <div class="titulo">${value.nombre}</div> 
                    <div class="precio">${value.precio.toLocaleString()} €</div>
                    <div>Alergenos:</div>
                    <div class="alerg"> <img src="${value.alergenos[0]}" alt=""> <img src="${value.alergenos[1]}" alt=""> <img src="${value.alergenos[2]}" alt=""> <img src="${value.alergenos[3]}" alt=""></div>
                    <div class="menu_selcion_cantidad">
                        <button class="menu_menos" onclick="cambiarCantidad_resta(${value.id})">-</button>
                        <div class="menu_cantidad">${value.cantidad}</div>
                        <button class="menu_mas" onclick="cambiarCantidad_suma(${value.id})">+</button> 
                    </div>    
                </div>`;
            lista.appendChild(newDiv);
        }
    })
    recargaElemento();
}


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
                    <button class="menu_menos" onclick="cambiarCantidad_resta(${value.id})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma(${value.id})">+</button> 
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
    prods.forEach((value) => {
        if (value.cantidad > 0) {
            value.coste = value.precio * value.cantidad
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <img src="${value.imagen}" alt="imagen_del_producto">
                <div>${value.nombre}</div>
                <div class="precio"> ${value.coste} €</div>
                <div>
                    <button class="menu_menos" onclick="cambiarCantidad_resta_m(${value.id})">-</button>
                    <div class="menu_cantidad">${value.cantidad}</div>
                    <button class="menu_mas" onclick="cambiarCantidad_suma_m(${value.id})">+</button> 
                </div>
                <button class="basura"  onclick="borrarElem(${value.id})"><img  src="media/menu/basura.svg" alt=""></button>`;
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

function saber_menu() {
    if (saber_mas_select === 1) {
        if (menu_select === 1) {
            initApp2(0);
        } else if (menu_select === 2) {
            initApp2(6);
        } else if (menu_select === 3) {
            initApp2(12);
        } else if (menu_select === 4) {
            initApp2(18);
        } else if (menu_select === 5) {
            initApp2(24);
        }
    } else {
        if (menu_select === 1) {
            initApp(0);
        } else if (menu_select === 2) {
            initApp(6);
        } else if (menu_select === 3) {
            initApp(12);
        } else if (menu_select === 4) {
            initApp(18);
        } else if (menu_select === 5) {
            initApp(24);
        }
    }

}

function cambiarCantidad_suma(key){
    let encontrado = 0;
    let i = 0;
    while(encontrado === 0 ){
        if (platos[i].id === key){
            encontrado = 1;
        }
        else {
            i ++
        }
    }
    platos[i].cantidad = platos[i].cantidad + 1 ;
    platos[i].coste = platos[i].precio * platos[i].cantidad
    saber_menu()

}
function cambiarCantidad_resta(key){
    let encontrado = 0;
    let i = 0;
    while(encontrado === 0 ){
        if (platos[i].id === key){
            encontrado = 1;
        }
        else {
            i ++
        }
    }
    if (platos[i].cantidad > 0){
        platos[i].cantidad = platos[i].cantidad - 1 ;
        platos[i].coste = platos[i].precio * platos[i].cantidad
    }
    saber_menu()
}

function borrarElem(key){
    let encontrado = 0;
    let i = 0;
    while(encontrado === 0 ){
        if (platos[i].id === key){
            encontrado = 1;
        }
        else {
            i ++
        }
    }
    platos[i].cantidad = 0;
    platos[i].coste = platos[i].precio * platos[i].cantidad
    mostarElemento()

}
function cambiarCantidad_suma_m(key){
    let encontrado = 0;
    let i = 0;
    while(encontrado === 0 ){
        if (platos[i].id === key){
            encontrado = 1;
        }
        else {
            i ++
        }
    }
    platos[i].cantidad = platos[i].cantidad + 1 ;
    platos[i].coste = platos[i].precio * platos[i].cantidad
    mostarElemento()

}
function cambiarCantidad_resta_m(key){
    let encontrado = 0;
    let i = 0;
    while(encontrado === 0 ){
        if (platos[i].id === key){
            encontrado = 1;
        }
        else {
            i ++
        }
    }
    if (platos[i].cantidad > 0){
        platos[i].cantidad = platos[i].cantidad - 1 ;
        platos[i].coste = platos[i].precio * platos[i].cantidad
    }
    mostarElemento()
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
	return true	
}

function check_card_name(name) {
	return name.length !== 0;
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

// Datos para el contador de tiempo
let cantidad_minutos = 10;
let cantidad_segundos = cantidad_minutos * 60;
let timerElement = document.getElementById('timer');

// Función para comenzar el contador de tiempo
function startTimer() {
    cantidad_segundos--;
    let minutos = Math.floor(cantidad_segundos / 60);
    let segundos = cantidad_segundos % 60;

    if (cantidad_segundos < 0) {
        timerElement.textContent = '00:00';
        cargando.style.display = 'None';
        let newDiv = document.createElement('p');
        newDiv.innerHTML = ` Pedido entregado`;
        clearInterval(timerInterval);
        return;
    }
    if (minutos < 10) {
        minutos = '0' + minutos;
    }
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    timerElement.textContent = minutos + ':' + segundos;
}
function confirmar_pago_si(){
    global_error_message(1, "Su pago a sifo reaizado con exito");
    cambiar_a_espera_pedido();
    confirmar_pedido_c.style.display = 'none'
}
function confirmar_pago_no(){
    cambiar_a_tarjeta()
    confirmar_pedido_c.style.display = 'none'
}


