document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp(){
    const comentarioInput = document.getElementById('comentario');
    const agregarButton = document.getElementById('agregar');
    const listaComentarios = document.getElementById('lista-comentarios');
/*getElementByd*/
    let comentarios = [];

    agregarButton.addEventListener('click',function(){
        agregarComentario(comentarios, comentarioInput, listaComentarios);
    });

    comentarioInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarComentario(comentarios, comentarioInput, listaComentarios);
        }
    });

}

function agregarComentario(comentarios, comentarioInput, listaComentarios ){
    const valorComentario = comentarioInput.value.trim();
    if(valorComentario){
        const nuevoComentario = {
            texto: valorComentario
        };
        comentarios.push(nuevoComentario);
        mostrarComentarios(nuevoComentario, listaComentarios);
        comentarioInput.value = '';
        }
    }

function mostrarComentarios(comentario, listaComentarios){
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = comentario.texto;
    listaComentarios.appendChild(nuevoItem);
}