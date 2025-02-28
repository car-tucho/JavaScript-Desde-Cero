document.addEventListener('DOMContentLoaded', () =>{
//Obtención de elementos del DOM
const inicio = document.getElementById('inicio');
const productos = document.getElementById('productos');
const contacto = document.getElementById('contacto');

//Obtención de elementos por su ID del menú de navegación
const menuInicio = document.getElementById('menu-inicio');
const menuProductos = document.getElementById('menu-productos'); 
const menuContacto = document.getElementById('menu-contacto');

//Obtención de elementos del DOM para  el carrito de compras
const listaCarrito = document.getElementById('lista-carrito');
const totalCarrito = document.getElementById('total-carrito');
let total = 0; //Variable para almacenar el total del carrito de compras

//Obtención de elementos del DOM para el formulario de contacto
const formularioContacto = document.getElementById('formulario-contacto');
const mensajeEnviado = document.getElementById('mensaje-enviado');


//Evento para mostrar la sección de inicio y ocultar las demás secciones
menuInicio.addEventListener('click', (e) => {
    e.preventDefault(); //Evitar comportamiento por defecto
    inicio.style.display = 'block';
    productos.style.display = 'none';
    contacto.style.display = 'none';
});

//Evento para mostrar la sección de inicio y ocultar las demás secciones
menuProductos.addEventListener('click', (e) => {
    e.preventDefault(); //Evitar comportamiento por defecto
    inicio.style.display = 'none';
    productos.style.display = 'block';
    contacto.style.display = 'none';
});

//Evento para mostrar la sección de inicio y ocultar las demás secciones
menuContacto.addEventListener('click', (e) => {
    e.preventDefault(); //Evitar comportamiento por defecto
    inicio.style.display = 'none';
    productos.style.display = 'none';
    contacto.style.display = 'block';
});



//Evento para agregar un producto al carrito de compras
productos.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar-carrito')) { //Verrifica si el click fue en un botón de agregar al carrito
        const nombre = e.target.dataset.nombre;//Obtiene el nombre del producto

        const precio = parseInt(e.target.dataset.precio);//Obtiene el precio del producto

        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = `${nombre} - $${precio}`;
        listaCarrito.appendChild(nuevoItem);

        total += precio; //Suma el precio de los productos
        console.log(total);
        actualizarTotalCarrito(); //Actualiza el total del carrito de compras
    }
});

//target - Es una propiedad que despliega el elemento que desencadeno
//classlist - Nos permite acceder a las clases de un elemento

//Ejemplo de querySelector para manipular el total del carrito de compras

const totalElemento = document.querySelector('#total-carrito');
function actualizarTotalCarrito() {
    totalElemento.textContent = total;
}

    //Titulo del carrito con querySelector
    const tituloCarrito = document.querySelector('#carrito h2');
    tituloCarrito.textContent = 'Sus pasteles';

    //Simular envio del formulario de contacto
    formularioContacto.addEventListener('submit', function(event){
        event.preventDefault(); //Evitar comportamiento por defecto
        formularioContacto.style.display = 'none'; //Ocultar el formulario de contacto
        mensajeEnviado.style.display = 'block'; //Mostrar el mensaje de enviado
    });

    //Ejemplo con querySelector para mostrar el precio del producto
    productos.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('producto')) {
            const precio = e.target.querySelector('.agregar-carrito').dataset.precio;
            e.target.setAtribute('title', `Precio: $${precio}`);
    }
    });

});