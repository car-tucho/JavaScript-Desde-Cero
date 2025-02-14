//Función
//Palabre reservada function + nombre de la función + parámetros
function Sumar(numero1,numero2){
    let total = numero1 + numero2;
    return total;
}

//Llamada a mi función
let resultado = Sumar(10,10);
//return nos permite guardar el resultado en una variable
console.log(resultado);

console.log(Sumar(12,20));

Sumar(2,3); //Se ejecuta pero no se imprime nada

function Saludar(nombre){
    console.log("Hola, bienvenido " + nombre); //Concatenar
}

    Saludar("Carolina");
    Saludar("Montserrat");

console.log(Sumar(2,3));


function Restar(a,b){
    let total = a - b;
    console.log(total); //Con console.log SOLO se imprime en consola
}

//No se guarda el resultado en una variable
Restar(13,2);


//console.log(total);

function Casita(){//No recibe parámetros (datos de entrada)
    let nombre = "Ana";//Variable local
    let apellido = "Villanueva";
    console.log("Esta es una casita");

}

Casita();
//console.log(nombre); //No se puede acceder porque esta dentro de una función
// Scope de bloque

let nombre = "Vanessa"// Variable global
let edad = 23;
let ciudad = "Ciudad de México";

console.log("Ella se llama " + nombre + " tiene" + edad + " años y vive en" + ciudad);

console.log (`Ella de llama ${nombre} tiene ${edad} años y vive en ${ciudad}`)
//  Ctrl + Alt + }
//ActualizacióN de ES6 (2025)

//Pedir datos al usuario
let usuario = prompt("Cual es tu nombre?");// Los datos se guardadn en string
let gatos =  prompt("Cuantos gatos tienes?");
let perros = prompt("Cuantod perros tienes?");

//Vemos los datos en console
console.log(` ${usuario} tiene ${gatos} y ${perros} perros.`);

//Vemos los datos en pop up
alert(` ${usuario} tiene ${gatos} gatos y ${perros} perros`);

//Vemos los datos en la página
document.write(` ${usuario} tiene ${gatos} gatos y ${perros} perros`);

//En total tiene x mascotas

let total = parseInt(gatos) + parseInt(perros);//Convertir string a numero
let total_2 = Number(gatos) + Number(perros);//Convertir string a numero

console.log(`En total tiene ${total} mascotas`);
alert(`En total ${usuario} tiene ${total} mascotas`);

document.write(`En total ${usuario} tiene ${total} mascotas`);
