/* Ejercicios
1) Función para calcular el area de un triangulo, rectangulo y circulo 
2) Funcion para convertir gradoas C a F 
3) Funcion para ver si un numero es par*/


// 1) Areas de Figuras

function areaDelTriangulo (a,h){
    let area = (a*h)/2;
    return area;
}

function areaDelRectangulo (a,h){
    let area = a * h;
    return area;
}

function areaDelCirculor(r){
    const Pi = 3.1416;
    let area = Pi * r*r;
    return area;
}

function areaDelCirculod(d){
    const Pi = 3.1416;
    let area = Pi * d*d/4;
    return area;
}
console.log(`El área de un triangulo de base 5 y altura 6 es: ${areaDelTriangulo(5,6)}`);
console.log(`El área de un rectángulo de base 10 y altura 15 es: ${areaDelRectangulo(10,15)}`);
console.log(`El área de un circulo de radio 2 es: ${areaDelCirculor(2)}`);
console.log(`El área de un circulo de diametro 4 es: ${areaDelCirculod(4)}`);


// 2)Grados Celsius a Farenheit

function CelsiusAFarenheit (celsius){
    let conversion = celsius * (9/5) + 32;
    return conversion
}
console.log(`La temperatura de 15°C a °F es: ${CelsiusAFarenheit(15)}`);

// 3) Funcion par o impar

function ParoImpar(a){
    if (a % 2 === 0){
        return "par";
    }else {
        return "impar";
    }
}
console.log(`El número 100 es un número ${ParoImpar(100)}, mientras el número 21 es ${ParoImpar(21)}`);




