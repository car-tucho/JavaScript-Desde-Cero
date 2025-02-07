//EJERCICIOS DE PRÁCTICO

//Tipo de mascotas = Gato, Perro, Hamstter
// Condicionales (Jaula mediana, grande, pequeña)

let tipoDeMascota = "Elefante"; 
if (tipoDeMascota === "Perro"){
    console.log("Si tienes perro, necesitas la jaula grande");
} else if (tipoDeMascota === "Gato"){
    console.log("Si tienes un gato, necesitas la jaula mediana");
} else if(tipoDeMascota === "Hamster"){
    console.log("Si tienes un hamster, necesitas la jaula pequeña")
}else {//ELSE  es el bloque falso
    console.log("No contamos con esas jaulas")
}

//Samáforo
let color = "Verde"; 
if (color === "Verde"){
    console.log("Siga");
} else if (color === "Rojo"){
    console.log("Alto");
} else if(color === "Amarillo"){
    console.log("Detente")
}else {
    console.log("No es un color válido")
}

let edad = 20;

let tieneLicencia = true;

if (edad >= 18 && tieneLicencia) {

console.log("Puedes conducir");

} else {
    console.log("No puedes conducir");
}

let creditos = 10;
let promedio = 9.5;

if(creditos >= 10 && promedio >= 8.5){
    console.log("Tienes derecho a una beca");

}else if (creditos < 10 && promedio < 8.5){
    console.log("No tienes derecho a una beca");
}
else if (creditos >= 10 && promedio < 8.5){
    console.log("Tu promedio debe subir");
}
else if (creditos < 10 && promedio >= 8.5){
    console.log("Te hacen falta créditos");
}

//EJERCICIO PRÁCTICO

/*Problema: Evaluador de Notas con Mensajes Personalizados
Crea un programa en JavaScript que evalúe la nota de un estudiante y genere un mensaje personalizado basado en la nota. Las notas se asignan de la siguiente manera:

Si la nota es 90 o más, el estudiante aprueba con "Excelente".
Si la nota está entre 75 y 89, el estudiante aprueba con "Bien".
Si la nota está entre 60 y 74, el estudiante aprueba con "Suficiente".
Si la nota es menor de 60, el estudiante no aprueba.*/

let nota = 49; 

if (nota >= 90){
    console.log("Excelente");
} else if (nota >= 75){
    console.log("Bien");
} else if(nota >= 60){
    console.log("Suficiente")
}else if (nota < 60){
    console.log("Esta reprobado chavx :(")
}