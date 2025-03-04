/*Problema: Caja de Comentarios (Simple Comment Box)
Crear una caja de comentarios donde los usuarios puedan escribir y agregar comentarios que se muestran en la página. Este proyecto ayudará a los estudiantes a manejar eventos de formularios y modificar el contenido de una página.

Instrucciones para resolver el problema:
Crea una página con un formulario que tenga un campo de texto para el comentario y un botón para agregarlo.
Cuando el usuario haga clic en el botón, el comentario debe aparecer en la página debajo del formulario.
Los estudiantes pueden agregar un botón para eliminar comentarios si lo desean.
Los comentarios deben aparecer junto con la fecha y hora de publicación. (opcional)*/

document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const listaComentarios = document.getElementById('lista-comentarios');



    let comentarios = [];

    agregarButton.addEventListener('click', function(){
        agregarComentario(comentarios, comentarioInput, listaComentarios);
    });

    comentarioInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarComentario(comentarios, comentarioInput, listaComentarios);
        }
    });
}

function agregarComentario(comentarios, comentarioInput, listaComentarios){

    const valorComentario = comentarioInput.value.trim();
    if(valorComentario){
        const nuevoComentario = {
            texto: valorComentario,
            fecha: new Date().toLocaleString(),
        };

        comentarios.push(nuevoComentario);
        mostrarComentarios(nuevoComentario, listaComentarios);
        comentarioInput.value = '';
    }
}

function mostrarComentarios(comentario, listaComentarios){
    const nuevoItem = document.createElement('li');
    nuevoItem.innerHTML = `<strong>${comentario.texto}</strong> <br> <small>${comentario.fecha}</small> <hr>`; 
    listaComentarios.appendChild(nuevoItem);

    const eliminarButton = document.createElement('button');
    eliminarButton.textContent = 'Eliminar';
    
    eliminarButton.addEventListener('click', function () {
    listaComentarios.removeChild(nuevoItem);
});
    nuevoItem.appendChild(eliminarButton);
    listaComentarios.appendChild(nuevoItem);

}