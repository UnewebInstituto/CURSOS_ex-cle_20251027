
console.log("Ejercicio 01 - Práctica TypeScript");
let saludo:string = "Hola Mundo";
console.log(saludo);

console.log("Ejercicio 02 - Práctica TypeScript");
console.log("Declaración EXPLICITA de variables");
// Tipo String
let nombre:string = "MARÍA VERONICA";
console.log(`Nombre: ${nombre}`);
// Tipo Number
let edad:number = 21;
console.log(`Edad: ${edad}`);
// Tipo Boolean
let esEstudiante:boolean = true;
console.log(`¿Es estudiante?: ${esEstudiante}`);

console.log("Declaración IMPLICITA de variables");
// Tipo String
let nombre2:string = "ANA MARÍA";
// La siguiente línea generaría un error de compilación
// nombre2 = 1;
console.log(`Nombre2: ${nombre2}`);
// Tipo Number
let edad2:number = 21;
// La siguiente línea generaría un error de compilación
//edad2 = "a";
console.log(`Edad2: ${edad2}`);
// Tipo Boolean
let esEstudiante2:boolean = true;
// La siguiente línea generaría un error de compilación
// esEstudiante2 = 7;
console.log(`¿Es estudiante2?: ${esEstudiante2}`);

console.log("Declaración de función de forma EXPLICITA");

function sumar(a:number, b:number):number{
    return a+b;
}

let resultado:number = sumar(3,4);
console.log(`Resultado de la suma: ${resultado}`);

console.log("Declaración de función de tipo void");
function saludar(mensaje:string):void{
    console.log(`Mensaje: ${mensaje}`);
}

saludar("Hola esto es un mensaje de prueba");

// Parte 2 de la práctica 

console.log("Parte 2 de la práctica TypeScript");

const curso:string="Typescript Fundamental";
const horas:number=4;

function bienvenida(nombre:string, tema:string):void{
    console.log(`Hola ${nombre}! Bienvenido al curso de ${tema}.`);
}

bienvenida("Estudiante proactivo", curso);
console.log(`Duración horas académicas de hoy: ${horas} horas.`);

console.log("\n---Ejercicio A:Any---");

let datosSinControl:any = 100;
/*
// VERSIÓN ANTIGUA (peligro!)
try{
    const resultado = datosSinControl.toUpperCase();
    console.log(`Resultado: ${resultado}`);
}catch(error){
    console.error("Error capturado en tiempo de ejecución (peligro!):", error.message);
}
*/

try {
    const resultado = datosSinControl.toUpperCase();
    console.log(resultado);
}catch (error) {
    // Verificamos si 'error' es una instancia de la clase Error
    if (error instanceof Error) {
        console.error("Error capturado:", error.message);
    } else {
        // Por si acaso alguien hizo un: throw "Algo salió muy mal"
        console.error("Ocurrió un error inesperado:", error);
    }
}

console.log("\nOtro caso con Any:");

datosSinControl = "typeScript";
console.log(`Valor reasignado y usado: ${datosSinControl.toUpperCase()}`);


console.log("\n---Ejercicio B:Unknown---");


let datosDesconocidos:unknown = 100.25;

// datosDesconocidos.toUpperCase()

if (typeof datosDesconocidos === "string"){
    console.log("Es un String:", datosDesconocidos.toUpperCase());
}else if (typeof datosDesconocidos === "number"){
    console.log("Es un number:", datosDesconocidos.toFixed(2));
}else if (typeof datosDesconocidos === "boolean"){
    console.log("Es un boolean:", datosDesconocidos.valueOf());
}else{
    console.log("Tipo de dato no manejado.");
}
