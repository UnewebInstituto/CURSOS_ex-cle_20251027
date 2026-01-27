"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaración de variables de tipo numérico
let edad = 30;
let pi = 3.14;
// Declaración de variables de tipo cadena o texto
let nombre = "Alicia";
// alt + 96 `
let saludo = `Hola, mi nombre es ${nombre}`;
// Declaración de variables de tipo booleano o lógico
let esActivo = true;
console.log(`Edad: ${edad}`);
console.log(`Pi: ${pi}`);
console.log(`Nombre: ${nombre}`);
console.log(`Saludo: ${saludo}`);
console.log(`¿Está activo?: ${esActivo}`);
/**
 * La instrucción a continuación genera un error de compilación
 * porque se está intentando asignar un valor de tipo cadena
 * a una variable que fue declarada como tipo numérico.
 */
//edad = "treinta";
// ****************************************** //
// Declaración Implicita Vs. Explicita 
// Declaración Implicita
let estatura = 1.71; // Declaración implícita
// Declaración Explicita 
let direccion = "Av. Francisco de Miranda"; // 
/**
 * La instrucción a continuación genera un error de compilación
 * porque se está intentando asignar un valor de tipo numérico
 * a una variable que fue declarada como tipo cadena.
 */
// direccion = 1;
console.warn(`Estatura: ${estatura}`);
console.warn(`Dirección: ${direccion}`);
// ****************************************** //
// Tipos Especiales: Any, Null, Undefined
// any
let data = "HOLA";
console.error(`Data: ${data}`);
data = 123;
console.error(`Data: ${data}`);
data = true;
console.error(`Data: ${data}`);
// unknown
let valor = "un texto";
/**
 * La instrucción a continuación genera un error de compilación
 * porque no se puede garantizar que la variable 'valor'
 * sea de tipo cadena en tiempo de compilación.
 */
//console.log(valor.toUpperCase()); // Error de compilación
if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // Correcto
}
let peso = 65.250;
// console.log(peso.toFixed(2));
if (typeof peso === "number") {
    console.log(peso.toFixed(2));
}
// void
function logMessage(msg) {
    console.log(msg);
}
logMessage("Este es un mensaje de prueba");
console.log("ASERCIONES DE TIPO");
let codigo = "12345";
let largo = codigo.length;
console.log(`Contenido de la variable codigo: ${codigo}`);
console.log(`Largo de la variable codigo: ${largo}`);
// Sintaxis antigua
let condigo2 = "67890";
let largo2 = condigo2.length;
console.log(`Contenido de la variable condigo2: ${condigo2}`);
console.log(`Largo de la variable condigo2: ${largo2}`);
//# sourceMappingURL=index.js.map