/*Problema: Crear objeto a partir de un Libro
Crear un objeto libro que contenga varias propiedades y un método para imprimir la información básica del libro.

Instrucciones para resolver el problema:
Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.*/

const libro = {
    titulo : "Temporada de huracanes",
    autor : "Fernanda Melchor",
    anio : 2017,
    editorial : "Penguin Random House",
    estado : "disponible",
    capitulos: ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"],

    describirLibro(){
        return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.anio} de la editorial ${this.editorial}, el estado es: ${this.estado}.`
    },
    agregarCapitulo(capitulo){
        this.capitulos.push(capitulo);
    },
    eliminarCapitulo(capitulo){
        this.capitulos.pop(capitulo);
    }
}

console.log(libro.describirLibro());

libro.agregarCapitulo("XIX");
console.log(libro.capitulos);

libro.eliminarCapitulo();
console.log(libro.capitulos);
