document.addEventListener('DOMContentLoaded', () => {
    const productoInput = document.getElementById('producto');
    const agregarButton = document.getElementById('agregar');
    const listaCompras = document.getElementById('lista-compras');

    let productos = []; //Arreglo para almacenar los productos

    agregarButton.addEventListener('click', () => {
    const nombreProducto = productoInput.value.trim();
    if(nombreProducto){
        const nuevoProducto = { //Objeto para representar un producto
            nombre: nombreProducto,
            comprado: false
            };
            productos.push(nuevoProducto);
            mostrarProductos(nuevoProducto);
            productoInput.value = '';
        }
    });


    function mostrarProductos(producto) {
        const nuevoItem = document.createElement('li');
        nuevoItem.textContent = producto.nombre;
        listaCompras.appendChild(nuevoItem);
    }
});

