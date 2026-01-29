console.log("Ejemplo de uso de genéricos en TypeScript");
// Declaración de una función genérica
function identidad<T>(arg:T):T{
    return arg;
}

function getPropiedad<T, K extends keyof T>(obj:T ,key:K){
    return obj[key];
}


// Uso de la función de forma explicita
console.log("Llamada explícita a la función genérica");
let output1 = identidad<string>("Día 4 del curso de TypeScript");
console.log(`${output1} que es de tipo ${typeof output1}`);

let output2 = identidad<number>(1234);
console.log(`${output2} que es de tipo ${typeof output2}`);

console.log("Llamada implícita o por inferencia a la función genérica");
let output3 = identidad("Hoy es jueves 29 de Enero de 2026");
console.log(`${output3} que es de tipo ${typeof output3}`);

let output4 = identidad(true);
console.log(`${output4} que es de tipo ${typeof output4}`);

// Uso de la función getPropiedad
interface Persona {
    nombre: string;
    edad: number;
    ciudad: string;
}

let persona: Persona = {
    nombre: "Ana",
    edad: 28,
    ciudad: "Madrid"
};

let nombrePersona = getPropiedad(persona, "nombre");
console.log(`El nombre de la persona es: ${nombrePersona} que es de tipo ${typeof nombrePersona}`);


// 2da. de declación de datos genericos: Clases genéricas

console.log("2da Parte declaración de clase genérica en TypeScript");
interface RespuestaApi<T>{
    codigo:number;
    mensaje:string;
    // T define el tipo de los datos contenidos
    data:T;
}

const respString:RespuestaApi<string[]> ={
    codigo:200,
    mensaje:"OK",
    data:["dato1","dato2","dato3"]
}

console.log(respString);

console.log("Declaración de clase generica");

class Contenedor<T>{
   // atributos
    private elemento:T[] = [];

   // métodos
   agregar(item:T):void{
        this.elemento.push(item);
   }

   obtener(index:number):T | undefined{
    return this.elemento[index];
   }
}

// Instancia de la clase genérica
const contenedorDeNumeros = new Contenedor<number>();
contenedorDeNumeros.agregar(7);
contenedorDeNumeros.agregar(14);
contenedorDeNumeros.agregar(-8);
contenedorDeNumeros.agregar(13);
contenedorDeNumeros.agregar(17);
contenedorDeNumeros.agregar(5);
contenedorDeNumeros.agregar(3)

console.log(`Valor almacenado en la posición 3: ${contenedorDeNumeros.obtener(3)}`);

/**
 * La siguiente línea genera un error de compilación porque el contenedor
 * fue declarado para almacenar números y se está intentando agregar una cadena.
 */
//
// contenedorDeNumeros.agregar("PRUEBA");

console.log("Restricciones de Genericos");

interface ConNombre{
    nombre:string;
}

// T debe ser compatible con conNombre
function obtenerNombre<T extends ConNombre>(objeto:T):string{
    return objeto.nombre;
}

let persona1 = {nombre:'Ana', edad:30};

console.log(`El valor del atributo nombre en persona1 es ${obtenerNombre(persona1)}`)
/**
 * La siguiente instrucción generará un error
 */
//let numero = 123;
//console.log(obtenerNombre(numero));

// Uso de decoradores 

console.log("Prueba de decoradores");

function Auditable<T extends {new(...args:any[]):{}}>(constructor:T){
    return class extends constructor{
        fechaRegistro = new Date();
    }
}

// Se añade la propiedad fechaRegistro a la clase 
@Auditable
class Empleado{
    nombre1:string = "Desconocido";
}
const empleado = new Empleado() as Empleado & {fechaRegistro:Date};
console.log(`Nombre de Empleado: ${empleado.nombre1}`);
console.log(`Fecha de registro: ${empleado.fechaRegistro}`);