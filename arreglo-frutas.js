/*Problema: Clasificación de Frutas
Imagina que tienes un programa que clasifica las frutas según su tipo y cuenta cuántas hay de cada tipo.

Instrucciones para resolver el problema:
Declara un arreglo llamado frutas con varios tipos de frutas.
Crea un objeto para almacenar la cantidad de cada tipo de fruta.
Usa un ciclo for/while para recorrer el arreglo y contar las frutas.
Imprime en la consola la cantidad de cada tipo de fruta.
Opcional: intenta implementar la solución con el otro ciclo también (for/while).*/


let frutas = ['Manzana', 'Uva', 'Uva', 'Fresa', 'Piña', 'Piña', 'Guayaba', 'Sandía']; 
console.log(frutas.length);

console.log(frutas);
let contador = [];
for(let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if(contador[fruta]){
        contador[fruta]++;      
    }else{
        contador[fruta] = 1;
    }
}
console.log(contador);