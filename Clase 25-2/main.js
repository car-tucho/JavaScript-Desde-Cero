function cambiarTexto(){
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Hola, desde el DOM";
}

function cambiarColor(){
    let parrafo = document.getElementsByClassName("texto");
    for (let i = 0; i < parrafo.length; i++){
        parrafo[i].style.color = "blue";
    }
}

/*Selecciona todos los elementos con la clase texto, y luego usamos un bucle para cambiar todos los parrafos seleccionados*/

function ocultarParrafo(){
    //Seleccionamos
    let segundoParrafo = document.getElementsByTagName("p")(4);
    segundoParrafo.style.display = "none";
}

/*Seleccionamos a todos los elementos p y despues indicamos mediante el indice cual tomaremos []*/

function cambiarTextoDiv(){
    let parrafoDiv = document.querySelector("div p")
    parrafoDiv.textContent = "Texto cambiado dentro del div";
}

/*Selecciona el primer parrafo que se encuentra dentro de un Div*/

function marcarItems(){
    let items = document.querySelectorAll("li");
    items.forEach (item => {
        item.style.backgroundColor = "yellow";
    });
}

/* Selecciona todos los elementos li en la pagina y cambia su color de fondo a amarillo */