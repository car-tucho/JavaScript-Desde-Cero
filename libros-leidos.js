/*Problema: Seguimiento de Libros
Crea un sistema muy sencillo para hacer seguimiento de los libros que has leído.

Instrucciones para resolver el problema:
Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.*/

//Declario mi arreglo vacío

let librosLeidos = [];
//Declarar mi función agregarLibro

function agregarLibro(tituloLibro){
    librosLeidos.push(tituloLibro);//Agregamos un elemento al arreglo
}

agregarLibro("El principito");
agregarLibro("Las mujeres que aman demasiado");
agregarLibro("Los 7 esposos de Evelyn Hugo");

console.log(librosLeidos); //Imprimimos el arreglo

//Mostrar los libros leídos

function mostrarLibrosLeidos(){
    for(let i = 0; i< librosLeidos.length; i++){
        console.log(librosLeidos[i]);
    }
}

//Tenemos que llamar a la función
mostrarLibrosLeidos();

console.log("-----------------------");

agregarLibro("El alquimista");
agregarLibro("La chica del tren");
agregarLibro("Javascript para principiantes");
mostrarLibrosLeidos();