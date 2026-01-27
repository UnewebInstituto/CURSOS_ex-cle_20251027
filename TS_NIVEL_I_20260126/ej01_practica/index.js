"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Ejercicio 01 - Práctica TypeScript");
let saludo = "Hola Mundo";
console.log(saludo);
console.log("Ejercicio 02 - Práctica TypeScript");
console.log("Declaración EXPLICITA de variables");
// Tipo String
let nombre = "MARÍA VERONICA";
console.log(`Nombre: ${nombre}`);
// Tipo Number
let edad = 21;
console.log(`Edad: ${edad}`);
// Tipo Boolean
let esEstudiante = true;
console.log(`¿Es estudiante?: ${esEstudiante}`);
console.log("Declaración IMPLICITA de variables");
// Tipo String
let nombre2 = "ANA MARÍA";
// La siguiente línea generaría un error de compilación
// nombre2 = 1;
console.log(`Nombre2: ${nombre2}`);
// Tipo Number
let edad2 = 21;
// La siguiente línea generaría un error de compilación
//edad2 = "a";
console.log(`Edad2: ${edad2}`);
// Tipo Boolean
let esEstudiante2 = true;
// La siguiente línea generaría un error de compilación
// esEstudiante2 = 7;
console.log(`¿Es estudiante2?: ${esEstudiante2}`);
console.log("Declaración de función de forma EXPLICITA");
function sumar(a, b) {
    return a + b;
}
let resultado = sumar(3, 4);
console.log(`Resultado de la suma: ${resultado}`);
console.log("Declaración de función de tipo void");
function saludar(mensaje) {
    console.log(`Mensaje: ${mensaje}`);
}
saludar("Hola esto es un mensaje de prueba");
// Parte 2 de la práctica 
console.log("Parte 2 de la práctica TypeScript");
const curso = "Typescript Fundamental";
const horas = 4;
function bienvenida(nombre, tema) {
    console.log(`Hola ${nombre}! Bienvenido al curso de ${tema}.`);
}
bienvenida("Estudiante proactivo", curso);
console.log(`Duración horas académicas de hoy: ${horas} horas.`);
console.log("\n---Ejercicio A:Any---");
let datosSinControl = 100;
/*
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
}
catch (error) {
    // Verificamos si 'error' es una instancia de la clase Error
    if (error instanceof Error) {
        console.error("Error capturado:", error.message);
    }
    else {
        // Por si acaso alguien hizo un: throw "Algo salió muy mal"
        console.error("Ocurrió un error inesperado:", error);
    }
}
console.log("\nOtro caso con Any:");
datosSinControl = "typeScript";
console.log(`Valor reasignado y usado: ${datosSinControl.toUpperCase()}`);
//# sourceMappingURL=index.js.map