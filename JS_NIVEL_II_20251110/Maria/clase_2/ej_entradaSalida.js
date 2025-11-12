//declaracion de dependencias 
import *    as readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process';


//1. crear instancia de la interfaz de lectura 
const rl = readline.createInterface({input, output});

//2. definicion de funciones 

const multiplicar = function(a,b){return a*b };

//otra forma de declaracion 
const sumar = (a,b)=> {return a+b;}

//3.declaracion de la funcion asincrona 

async function pedirDatos() {
    console.log('Bienvenidos al script de captura de datos'); 
    //Declaracion de variables 
    let a;
    let b;

    //uso del argumento await hasta que el usuario ingrese los datos 
    // todo valor ingresado a travez del teclado es una cadena de texto
    a = await rl.question('ingrese el valor de a:')
    b = await rl.question('ingrese el valor de b:')

    a = Number(a);
    b = Number(b); 

    //llamado a la funcion 
    console.log(`resultado de la multiplicacion ${multiplicar(a,b)}`);
    console.log (`resultado de la suma ${sumar(a,b)}`);

    //4 cerrar la interfaz 

    rl.close(); 
    
}
// delcaracion de variales no privadas 
// cuerpo principal del programa

pedirDatos();