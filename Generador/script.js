const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lenghtCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => {
    lenghtCounter.textContent = inputRange.value;
}


const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    //Obtener opciones que esten seleccionadas
    const useUpperCase = document.querySelector('#upppercase').checked;
    const useLowerCase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    //Creamos un conjunto de caracteres a usar en la contraseñas
    if(useUpperCase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(useLowerCase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(useNumbers) characters += '0123456789';
    if(useSymbols) characters += '!@#$%&*()_+-=[]{}|,.<>/?';

    //Si no seleccionamos ninguna opcion
    if(characters === '') {
        passwordHeading.textContent = 'Selecciona al menos una opcion';
        return  '';

    }

    // Generador de contraseña aleatoria
    for(let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length)); 

        // Multiplicamos por el largo de la cadena de caracteres para obrtener un numero aleatorio ya que en Math.random nos da un numero aleatorio entre 0 y 1
    }
    return result;
    };

//Función que imprima la contraseña
const PrintPassword = (event) => {
    event.preventDefault(); //Previene que el formulario se envie por defecto
    const password = generatePassword(inputRange.value); //Genera la contraseña
    if (password) {
        passwordHeading.textContent = password;//Muestra la contraseña generada
        }
};


//Configuración de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);

