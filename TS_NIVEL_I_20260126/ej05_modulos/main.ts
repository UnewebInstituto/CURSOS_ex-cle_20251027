// Ejemplo de módulos
console.log("Ejemplo de módulos");

import {DEFAULT_ID, type Usuario as User} from './Usuario.js';

import type {Usuario as UsuarioTipo} from './Usuario.js';

const nuevoUsuario: User = {id:DEFAULT_ID, nombre:"Invitado"};

console.log(nuevoUsuario);


// Ejemplo de tipos utilitarios
console.log("Ejemplo de tipos utilitarios");

type EsArray<T> = T extends any[]? true:false;

type A = EsArray<number[]>; // A es true
type B = EsArray<string>; // B es false

let pruebaA: A;
let pruebaB: B;

pruebaA = true;
console.log(typeof(pruebaA));

/**
 * La siguiente asignación genera un error de tipo
 * si se intenta asignar true a pruebaB cuando este
 * fue declarado como false en el tipo B
 */
//pruebaB = true;
pruebaB = false;
console.log(typeof(pruebaB));



