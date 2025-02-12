
let verduras = ['Lechuga', 'Tomate', 'Cebolla', 'Jitomate', 'Papa', 'Pimiento']; //Arreglo con datos

console.log(verduras[0]);
console.log(verduras[1]);
console.log(verduras[2]);
console.log(verduras[3]); 

console.log(verduras.length);

console.log("Imprimiendo verduras con el ciclo for")

for(let indice = 0; indice < verduras.length; indice++){
    console.log(verduras[indice]);
}

let personas = [];
personas.push('Ana');
personas.push('Diego');
personas.push('Liset');
personas.push('Marcela');

console.log(personas);

personas.pop();

personas.unshift('Alex');//Agregar un elemento al inicio del arreglo
personas.unshift('Yolanda');

console.log(personas);

personas.shift();//Elimino el primer eleemnto del arreglo
console.log(personas);

personas[1] = 'Monica'; //modificar el siguiente arreglo
console.log(personas);



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


let suma = 0; let numero = 1; while (suma < 5) { suma += numero; numero++; } console.log(suma);

for (let i = 0; i < 3; i++) { console.log("Hola"); }

let suma1 = 0; for (let i = 1; i <= 5; i++) { suma1 += i; } console.log(suma1);