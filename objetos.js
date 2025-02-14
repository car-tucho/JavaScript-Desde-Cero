//Un objeto
//Declarando mi objeto libro
const libro = {
    titulo : "100 años de soledad",
    autor : "Gabriel García Marquez",
    numeroPaginas : 578,
    editorial : "Alfaguara"
}

//Pares de clave: valor

console.log(libro.editorial);

let libros = ["El laberito de la soledad", "Octavio Paz", 432, "Sudamericana"];

const frutas1 = {
    manzana : 3,
    platano : 4,
    pera : 2,

}

//SOLUCIÓN EJERCICIO

//Declarar un arreglo llamado frutas con varios tipos de fruta
let frutas = ["Manzana", "Platano", "Manzana", "Lulo", "Platano", "Lulo", "Manzana"];

//Crear un objeto para alamacenar la cantidad de cada tipo de frutas
let conteoFrutas = {};

//Usar un ciclo for para recorre el arreglo y contar las frutas
for (let indice = 0; indice < frutas. length; indice ++){
    let fruta = frutas[indice];
    if (conteoFrutas[fruta]){
        //Si la fruta ya existe, incrementamos el contador
        conteoFrutas[fruta]++; //conteoFrutas[fruta] = conteoFrutas[fruta] + 1
    }else{
        conteoFrutas[fruta] = 1;
    // Si la fruta no existe, iniciamos el contador en 1
    }
}

//  Imprimir en la consola la cantidad de cada tipo de frutas
console.log("Conteo de frutas usando ciclo for");
for (let fruta in conteoFrutas){
    console.log(`${fruta}: ${conteoFrutas[fruta]}`)
}

