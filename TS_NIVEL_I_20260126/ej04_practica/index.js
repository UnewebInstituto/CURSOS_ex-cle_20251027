"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1ra. Parte de la práctica: Funciones genéricas
// Esta función retorna el contenido del arreglo en orden inverso
function revertirArray(items) {
    return items.reverse();
}
// Prueba con strings
const nombres = ["AURA", "MARÍA", "PAOLO", "JONATAN", "HENRY"];
const nombresRevertidos = revertirArray(nombres);
console.log("Nombres revertidos:", nombresRevertidos);
const numeros = [1, 3, 5, 7, 9];
const numerosRevertidos = revertirArray(numeros);
console.log("Números revertidos:", numerosRevertidos);
// Al tratarse de un arreglo de strings no permite que
// se agregue un número
// nombresRevertidos.push(99);
// Decoradores
function registrarTiempo(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    // Reemplazamos el método original con una nueva implementación
    descriptor.value = function (...arg) {
        const t1 = Date.now();
        const resultado = metodoOriginal.apply(this, arg);
        const t2 = Date.now();
        console.log(`\n@LOGGER: El método ${propertyKey} tardó ${t2 - t1} ms`);
        return resultado;
    };
    return descriptor;
}
// Implementación de la clase con el decorador
class Calculadora {
    // Aplicamos el decorador al método
    // Declaración del método
    sumarLentamente(a, b) {
        // Simulación de una tarea pesada
        let i = 0;
        // 10 millones de iteraciones
        while (i < 1e7) {
            i++;
        }
        return a + b;
    }
}
__decorate([
    registrarTiempo
], Calculadora.prototype, "sumarLentamente", null);
// Instancia de la clase
const calc = new Calculadora();
console.log(`Resultado del cálculo: ${calc.sumarLentamente(10, 20)}`);
// 2da. Parte de la práctica: Decoradores
/**
* Función Genérica para fusionar dos objetos.
* @param obj1 Primer objeto (Tipo T)
* @param obj2 Segundo objeto (Tipo U)
* @returns Un nuevo objeto que es la intersección de T y U (T & U)
 */
function combiNarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}
// Declaración de objetos
const clienteBase = { id: 101, nombre: 'Juan Pérez' };
const infoContacto = { email: 'juan@email.com', telefono: '555-1234' };
// Llamado a la función generica para la combinación de ambos objetos
const clienteCompleto = combiNarObjetos(clienteBase, infoContacto);
console.log("\nObjeto combinado:", clienteCompleto);
console.log("ID Cliente:", clienteCompleto.id);
console.log("Nombre Cliente:", clienteCompleto.nombre);
console.log("Email Cliente:", clienteCompleto.email);
console.log("Teléfono Cliente:", clienteCompleto.telefono);
// Declaración decorador
function LogLlamada(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    // Reemplazamos la implementación del método original
    descriptor.value = function (...args) {
        const timestamp = new Date().toLocaleTimeString();
        console.log(`\n@LOG: Método ${propertyKey} llamado a las ${timestamp} con argumentos: ${JSON.stringify(args)}`);
        // Ejecutamos el método original
        const resultado = metodoOriginal.apply(this, args);
        // Registramos el resultado del método
        console.log(`@LOG: Método ${propertyKey} retornó: ${JSON.stringify(resultado)} a las ${timestamp}`);
        return resultado;
    };
    return descriptor;
}
class ProcesarDatos {
    // Implemetamos el decorador
    procesar(datos, operacion) {
        console.log(`[PROCESAR]: Ejecutando operación '${operacion}' en datos: ${datos.join(", ")}`);
        return datos.length * 2;
    }
}
__decorate([
    LogLlamada
], ProcesarDatos.prototype, "procesar", null);
console.log("\n--- Prueba del decorador @LogLlamada ---");
const procesador = new ProcesarDatos();
const resultado = procesador.procesar(["a", "b", "c"], "Conteo doble");
console.log(`Resultado de la operación: ${resultado}`);
//# sourceMappingURL=index.js.map