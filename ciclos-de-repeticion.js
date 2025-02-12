//Programa para mostrar los multiplos de 5 hasta un numero dado  por el usuario
let numero = 20;
let contador = 0;

while(contador<= numero){
    //Cídigo a iterar
    if(contador % 5 === 0){
        console.log(contador);
    }
    contador++;
//contador = contador + 1
//contador += 1
}
console.log("Fin del programa");

// Numero impares

let numero2 =  35;

for(let indice = 0; indice <= numero2; indice++){
    if(indice % 2 !==0){
        console.log(indice);
    }
}
console.log("Fin del programa");

// Bucle while cuando no sabemos cuantas veces se va a repetir el código
let inicio = 0;

while(inicio <= 10){
    console.log(inicio);
    inicio++;
}
//Bulce for: ya sabemos cuantas veces se va a repetir el código
//Para arreglso
for(let i=1; i <= 10; i++){
    console.log(i);// Imprimiento el valor de i
}