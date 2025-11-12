import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

// crear instancia de la interfaz de lectura

const rl= readline.createInterface({input, output});
//definicion de funciones 
const multiplicar = function(a,b) 
{return a*b};

// otra forma de declaracion
const sumar = (a,b) => {return a+b;}

// declaracion de la funtion asincrona
async function pedirDatos() {
  console.log('Bienvenidos al script de captura de datos');
  // declaracion de variable 
  let a;
  let b; 
  // uso del argumento  await hasta que el usuario ingrese los datos
  a= await rl.question('Ingrese el valor de a:');
  b= await rl.question('Ingrese el valor de b:')

  a= Number(a);
  b= Number(b);

//llamado a la funcion
console.log(`Resultado de la multiplicacion ${multiplicar(a,b)}`);
console.log(`Resultado de la suma ${sumar(a,b)}`);
rl.close();

}

//cuerpo principal
pedirDatos();