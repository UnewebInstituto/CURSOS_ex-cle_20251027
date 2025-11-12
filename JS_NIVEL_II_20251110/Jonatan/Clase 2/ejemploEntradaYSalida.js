import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

// 1. Crear una instancia de la interfaz de lectura
const rl = readline.createInterface({input, output});

// 2. Definir una funcion asincrona para la interaccion
//Declaracion de funciones asignandosela a una variable
const multiplicar = function (a,b) {
    return a*b
  }
//Otra declaracion de funciones
const sumar = (a,b) =>{
  return a+b
}

async function pedirDatos() {
  console.log("Bienvenido al script")
  let a;
  let b;

//Usar el await para pausar hasta que el usuario ingrese el dato

a= await rl.question('Por favor, ingresa el valor de a: ');
b= await rl.question('Por favor, ingresa el valor de b: ');

a= Number(a);
b= Number(b);


//3. Usar el dato ingresado console.log(`el resultado de la multiplicacion es, ${multiplicar(a,b)}`)
console.log(`El resultado de la multiplicacion es, ${multiplicar(a,b)}`)
console.log(`El resultado de la suma es, ${sumar(a,b)}`)


// 4. Cerrar la interfaz es crucial para que el script terminer rl.close()

rl.close()


}
pedirDatos()