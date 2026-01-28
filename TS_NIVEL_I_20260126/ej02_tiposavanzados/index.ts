console.log("----- ARREGLOS -----");

let nombres:string[] = ["MARÍA","AURA","JONATAN","PAOLO"];
let edades:number[] = [23,34,45,56];
/**
 * La siguiente instrucción genera error dado que el arreglo
 * es de tipo string y el valor a asignar es numérico
 */
//nombres.push(20);

// Otra forma de declaración de arreglos
let precios:Array<number> = [10.5, 20.99, 5.00];
let esValido:Array<boolean> = [true, false, true];

console.log("Contenido de Nombres");
let i:number = 0;
while (i < nombres.length){
    console.log(nombres[i]);
    i = i + 1; // i++; i+=1
}
console.log("\nContenido de Edades");
i = 0;
do{
    console.log(edades[i]);
    i++;
}while (i< edades.length);

console.log("\nContenido de Precios");
for(i=0; i<precios.length; i++){
    console.log(precios[i]);
}

console.log("\nContenido de esValido");
esValido.forEach((valor =>{
    console.log(valor);
}));

console.log("\n----- TUPLAS -----")

let usuario:[string, number];
usuario = ["MARÍA", 23];

/**
 * La siguiete instrucción genera error dado que el tipo de dato
 * no coincide con la definición de la tupla
 */
// usuario = [28,"AURA"];

/**
 * La siguiente instrucción genera error dado que la tupla
 * fue definida para tener 2 elementos y se están asignando 3
 */
//usuario = ["PAOLO", 30, true]; // Esto es válido en TypeScript

let coordenadas:[number, number, string] = [40.7128, -74.0670, "NEW YORK"];

console.log("\nUsuario:");
console.log("Nombre: " + usuario[0]);
console.log("Edad: " + usuario[1]);

console.log("\nCoordenadas:");
console.log("Latitud: " + coordenadas[0]);
console.log("Longitud: " + coordenadas[1]);
console.log("Ciudad: " + coordenadas[2]);

console.log("\n-----INTERFACES-----");

interface Producto{
    id:number;
    nombre:string;
    precio:number;
    stock:boolean;
    descripcion?:string; // Atributo opcional
}

// Creación del objeto 1
const libro:Producto ={
    id:101,
    nombre:'Clean Code',
    precio:50.99,
    stock:true
}
// Creación del objeto 2
const libro1:Producto ={
    id:102,
    nombre:'María',
    precio:10.99,
    stock:true,
    descripcion:'Novela romántica de Jorge Isaac'
}

console.log("\nObjeto 1:");
console.log("ID: " + libro.id);
console.log("Nombre: " + libro.nombre);
console.log("Precio: " + libro.precio);
console.log("Stock: " + libro.stock);
console.log("Descripción: " + libro.descripcion);

console.log("\nObjeto 2:");
console.log("ID: " + libro1.id);
console.log("Nombre: " + libro1.nombre);
console.log("Precio: " + libro1.precio);
console.log("Stock: " + libro1.stock);
console.log("Descripción: " + libro1.descripcion);

// Combinación de arreglos con interfaces

let libreria:Producto[] = [];
libreria.push(libro);
libreria.push(libro1);

console.log("\nContenido de la librería:");
libreria.forEach((item =>{  
    console.log("ID:"+item.id + " Nombre:"+item.nombre + " Precio:"+item.precio + " Stock:"+item.stock + " Descripción:"+item.descripcion);
}));


console.log("\n2da forma de recorrer el contenido del objeto librería:");
for(i=0; i<libreria.length; i++){
    console.log("ID:"+libreria[i]?.id + " Nombre:"+libreria[i]?.nombre + " Precio:"+libreria[i]?.precio + " Stock:"+libreria[i]?.stock + " Descripción:"+libreria[i]?.descripcion);
}

console.log("\n ---- DECLARACIÓN DE TYPE/ALIAS ----");

type ID = string | number;

let userId:ID = "abc-123";
let productId:ID = 456;
/**
 * No permite la asignación dado que no corresponde al tipo definido
 */
//let stockId:ID = true;

// Otra forma de declaración de type, similar a declarar una interface

type Punto={
    x:number;
    y:number;
}

let origen:Punto={x:0, y:0};
let destino:Punto={x:10, y:15};

console.log("\nCoordenadas del origen:");
console.log(`x: ${origen.x}, y: ${origen.y}`);

console.log("\nCoordenadas del destino:");
console.log(`x: ${destino.x}, y: ${destino.y}`);   

console.log("\n--- UNIÓN DE TIPOS ---");
type estado = "activo" | "inactivo" | "pendiente";

let status:estado = "activo";
/**
 * La instrucción siguiente genera error dado que el valor
 * no corresponde a ninguno de los tipos definidos en la unión
 */
//status = "eliminado";

console.log(`Estado actual: ${status}`);

function imprimirId(id: string | number){
    if (typeof id === "string"){
        console.log(`id: ${id.toUpperCase()}`);
    } else if (typeof id === "number"){
        console.log(`id: ${id.toFixed(2)}`);
    } else{
        console.log("Tipo de id no soportado.");
    }
}

imprimirId("usuario-001");
imprimirId(2500);
/**
 * La siguiente instrucción genera error dado que el tipo booleano
 * no está definido en la unión de tipos
 */
//imprimirId(true);

console.log("\n--- DECLARACIÓN DE LITERALES ---");
let metodo:'GET' = 'GET';
/**
 * La siguiente instrucción genera error dado que el valor
 * no coincide con el tipo literal definido
 */
//metodo = 'POST';
type codigoHTTP = 200 | 404 | 500;
let respuesta:codigoHTTP = 200;
/**
 * La siguiente instrucción genera error dado que el valor
 * no coincide con los tipos literales definidos
 */
// respuesta = 300;


console.log("\n--- DECLARACIÓN DE INTERSECCIÓN ---");
interface Auditable{
    createdAt:Date;
}
type Usuario={
    nombre:string;
}

type Admin = Usuario & Auditable & {rol:"admin"};

const nuevoAdmin:Admin = {
    nombre:"Henry Duque",
    createdAt:new Date(),
    rol:"admin"
};

console.log("\n Datos del nuevo administrador:");
console.log(`Nombre: ${nuevoAdmin.nombre}`);
console.log(`Rol: ${nuevoAdmin.rol}`);
console.log(`Creado en: ${nuevoAdmin.createdAt.toISOString()}`);

