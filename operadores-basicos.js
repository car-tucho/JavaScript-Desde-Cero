let valor_1 =  27;
let valor_2 = 4;

//Operaciones básicas

let suma = valor_1 + valor_2;
console.log(suma);

let resta = valor_1 - valor_2;
console.log(resta);

let multiplicacion =  valor_1 * valor_2;
console.log(multiplicacion);

let division =  valor_1 / valor_2;
console.log(division);

let modulo = valor_1 % valor_2;
console.log(modulo);

let exponencial = valor_1 ** valor_2;
console.log(exponencial);

//Operadores de comparación

let numero_1 = 3; //Number
let numero_2 = "3"; //String

console.log(numero_1 == numero_2); //Comparación debil (NOS DICE QUE TENENMOS UN ERROR EN EL TIPO DE DATO)


console.log (numero_1 === numero_2);// Comparación estricta (OBLIGAMOS A QUE SEA VERDADERO)

console.log("Operadores lógicos y de comparacion");
console.log(10>4);//Mayor que
console.log(2<1);//Menor que
console.log(10>=10); //Mayor gual que
console.log(10<=10);// menor igual  que

//La respuesta es un valor boleano

console.log("Diferente de:");
console.log(15 != 15); //False porque es el mismo

console.log("AND: &&");
//Para poder entrtar a un antro
let edad = 20;
let tieneLicencia = true;
console.log(edad >= 18 && tieneLicencia); // true, porque ambas condiciones son verdaderas

console.log("OR: ||");
//Para aprender a programar
let esMayorDeEdad = false;
let esEstudiante = true;
console.log(esMayorDeEdad || esEstudiante); // true, porque una condición es verdadera


console.log("NOT: !")
let esFinDeSemana = true;
console.log(!esFinDeSemana); // false, porque invierte el valor


let calificación = 9;
let calificación1 = 10;
let calificación2 =  3;
let calificación3 = 7;
let calificación4 = 8;
// +- Nos permite hacer una suma acumulativa  promedio = promedio * calificación1 equivale a promedio +- calificación1