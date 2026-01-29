"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Ejemplo de uso de genéricos en TypeScript");
// Declaración de una función genérica
function identidad(arg) {
    return arg;
}
function getPropiedad(obj, key) {
    return obj[key];
}
// Uso de la función de forma explicita
console.log("Llamada explícita a la función genérica");
let output1 = identidad("Día 4 del curso de TypeScript");
console.log(`${output1} que es de tipo ${typeof output1}`);
let output2 = identidad(1234);
console.log(`${output2} que es de tipo ${typeof output2}`);
console.log("Llamada implícita o por inferencia a la función genérica");
let output3 = identidad("Hoy es jueves 29 de Enero de 2026");
console.log(`${output3} que es de tipo ${typeof output3}`);
let output4 = identidad(true);
console.log(`${output4} que es de tipo ${typeof output4}`);
let persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid"
};
let nombrePersona = getPropiedad(persona, "nombre");
console.log(`El nombre de la persona es: ${nombrePersona} que es de tipo ${typeof nombrePersona}`);
// 2da. de declación de datos genericos: Clases genéricas
console.log("2da Parte declaración de clase genérica en TypeScript");
const respString = {
    codigo: 200,
    mensaje: "OK",
    data: ["dato1", "dato2", "dato3"]
};
console.log(respString);
console.log("Declaración de clase generica");
class Contenedor {
    // atributos
    elemento = [];
    // métodos
    agregar(item) {
        this.elemento.push(item);
    }
    obtener(index) {
        return this.elemento[index];
    }
}
// Instancia de la clase genérica
const contenedorDeNumeros = new Contenedor();
contenedorDeNumeros.agregar(7);
contenedorDeNumeros.agregar(14);
contenedorDeNumeros.agregar(-8);
contenedorDeNumeros.agregar(13);
contenedorDeNumeros.agregar(17);
contenedorDeNumeros.agregar(5);
contenedorDeNumeros.agregar(3);
console.log(`Valor almacenado en la posición 3: ${contenedorDeNumeros.obtener(3)}`);
/**
 * La siguiente línea genera un error de compilación porque el contenedor
 * fue declarado para almacenar números y se está intentando agregar una cadena.
 */
//
// contenedorDeNumeros.agregar("PRUEBA");
console.log("Restricciones de Genericos");
// T debe ser compatible con conNombre
function obtenerNombre(objeto) {
    return objeto.nombre;
}
let persona1 = { nombre: 'Ana', edad: 30 };
console.log(`El valor del atributo nombre en persona1 es ${obtenerNombre(persona1)}`);
/**
 * La siguiente instrucción generará un error
 */
//let numero = 123;
//console.log(obtenerNombre(numero));
// Uso de decoradores 
console.log("Prueba de decoradores");
function Auditable(constructor) {
    return class extends constructor {
        fechaRegistro = new Date();
    };
}
// Se añade la propiedad fechaRegistro a la clase 
let Empleado = class Empleado {
    nombre1 = "Desconocido";
};
Empleado = __decorate([
    Auditable
], Empleado);
const empleado = new Empleado();
console.log(`Nombre de Empleado: ${empleado.nombre1}`);
console.log(`Fecha de registro: ${empleado.fechaRegistro}`);
//# sourceMappingURL=index.js.map