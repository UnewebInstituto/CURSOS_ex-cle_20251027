// Declaración de interface
/*
// Versión antes de corrección
export interface Usuario{
    id:number;
    nombre:string;
}

// Declaración de constante
export const DEFAULT_ID = 0;
*/

interface Usuario{
    id:number;
    nombre:string;
}

// Declaración de constante
const DEFAULT_ID = 0;

export type {Usuario};
/**
 * Para exporta la constante es requerido indicar en el 
 * archivo package.json, la propiedad "type":"module"
 */
export {DEFAULT_ID}
