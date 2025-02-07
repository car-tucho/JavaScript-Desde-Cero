//Var es una forma antigua de declarar variables
var nombre = "Carlos";

console.log(nombre);

//Let no permite redeclarar variables, lo que significa que no puedes declarar la misma variable dos veces

let apellido1 = "Sanchez";

let apellido2 = "Lopez";

//Let si permite cambiar el valor
// Reasignación de valor

//Let tiene scope de bloque, lo que significa que solo vive en el bloque

apellido1 =  "Perez";
console.log(apellido1);

// const es una constante, no se puede reasignar el valor
const PI = 3.1416;

PI = 4; //Esto no se puede hacer