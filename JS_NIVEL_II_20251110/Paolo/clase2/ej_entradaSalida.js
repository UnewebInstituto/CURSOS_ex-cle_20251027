import* as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({input,output});

const multiplicar= function (a,b){return a*b};
const sumar = (a,b)=>{return a +b};

async function pedirDatos() {
  console.log("Bienvenido al script");
  let a;
  let b;

  a= await rl.question ('Por favor, ingresa e valor de a: ');
  b= await rl.question ('Por favor, ingresa e valor de b: ');

  a = Number(a);
  b = Number(b);

  console.log(`El resultado de la multiplicación es, ${multiplicar(a,b)}`);

  console.log(`El resultado de la suma es, ${sumar(a,b)}`);

  rl.close();
}

pedirDatos();