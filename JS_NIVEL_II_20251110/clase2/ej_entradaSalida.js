/* DECLARACIÓN DE DEPENDENCIAS */
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

/* DECLARACIÓN DE FUNCIONES */
// 1-Crear instancia de la interfaz de lectura
const rl = readline.createInterface({input, output});

// 2- Definción de funciones
const multiplicar = function (a,b){return a*b};

// Otra forma declaración
const sumar = (a,b) => {return a+b;}

// 3- Declaración de la función asincrona
async function pedirDatos() {
    console.log('Bienvenidos al Script de Captura de Datos');
    // Declaración de variables
    let a;
    let b;

    // Uso del argumento hasta que el usuario ingrese los datos 
    // Todo valor ingresado a través del teclado es una cadena d
    // de texto. Debe ser convertido al tipo de dato a usar.
    a = await rl.question('Ingrese el valor de a:');
    b = await rl.question('Ingrese el valor de b:')

    a = Number(a);
    b = Number(b);

    // Llamado a las funciones
    console.log(`Resultado de la multiplicación ${multiplicar(a,b)}`);

    console.log(`Resultado de la suma ${sumar(a,b)}`);
    
    // 4- Cerrar la interface
    rl.close();
}

/* DECLARACIÓN DE VARIABLES */

/* CUERPO PRINCIPAL DEL PROGRAMA */
pedirDatos();