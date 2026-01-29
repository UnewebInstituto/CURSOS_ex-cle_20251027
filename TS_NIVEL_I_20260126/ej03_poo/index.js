"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Caso 1, recibe parámetros y retorna un valor
function calcularIVA(precioBase, tasaIVA) {
    return precioBase * tasaIVA;
}
let precioArticulo = 100;
let valorIVA = 0.16; // 16% de IVA
console.log(`El IVA para el artículo de precio ${precioArticulo.toFixed(2)}, cuyo factor de IVA es ${valorIVA * 100}% es ${calcularIVA(precioArticulo, valorIVA)}`);
// Caso 2, recibe parámetros pero no retorna valor
function logearAccion(accion) {
    console.log(`[LOG] Acción realizada: ${accion}`);
}
logearAccion('Cálculo de IVA procesado con éxito');
// Parámetros opcionales y por defecto
function formatearMoneda(cantidad, simbolo) {
    if (simbolo) {
        return `${simbolo} ${cantidad.toFixed(2)}`;
    }
    return `${cantidad.toFixed(2)}`;
}
console.log(formatearMoneda(1500.50, '$'));
console.log(formatearMoneda(1500.50));
// Caso por defecto
function calcularImpuesto(monto, tasa = 0.16) {
    return monto * tasa;
}
console.log(calcularImpuesto(200));
console.log(calcularImpuesto(200, 0.10));
// Clases y Tipado de Clases
class CuentaBancaria {
    // atributos de la clase
    numeroCuenta = '';
    saldo = 0;
    // constructor
    /**
     * Es un método especial que permite la inicialización del objeto al momento que se instancia la clase
     */
    constructor(numero, saldoInicial) {
        this.numeroCuenta = numero;
        this.saldo = saldoInicial;
        console.log(`Cuenta creada con número ${this.numeroCuenta} y saldo inicial ${this.saldo}`);
    }
    // método tipado
    depositar(cantidad) {
        this.saldo += cantidad;
        /**
         * La operación anterior es equivalente a
         * this.saldo = this.saldo + cantidad;
         */
        logearAccion(`Depósito de ${cantidad}`);
    }
    obtenerSaldo() {
        return this.saldo;
    }
}
// INSTANCIAR LA CLASE CuentaBancaria a traves del constructor
let cuenta1 = new CuentaBancaria('1234567890', 1000);
cuenta1.depositar(500);
console.log(`El saldo actual de la cuenta ${cuenta1.numeroCuenta} es ${formatearMoneda(cuenta1.obtenerSaldo(), '$')}`);
// Modificadores de acceso:
/**
 * Public, Private, Protected and Readonly
 */
class Usuario {
    id;
    nombre;
    token;
    fechaCreacion;
    // Métodos de la clase
    constructor(id, nombre, token, fechaCreacion = new Date()
    /*
    // Caso en que todos los atributos son públicos
    public id:number,
    public nombre:string,
    public token:string,
    public fechaCreacion:Date = new Date()
    */
    ) {
        this.id = id;
        this.nombre = nombre;
        this.token = token;
        this.fechaCreacion = fechaCreacion;
    }
    getId() {
        return this.id;
    }
}
// Creación del objeto user
const user = new Usuario(1, "Alice", "xyz-123");
console.log(user.getId());
console.log(user.nombre);
console.log(user.fechaCreacion);
/**
 * La siguiente instrucción no se puede efectuar porque
 * fechaCreacion es de solo lectura (readonly)
 */
//user.fechaCreacion = new Date();
// Enums
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Norte"] = 0] = "Norte";
    Direccion[Direccion["Este"] = 1] = "Este";
    Direccion[Direccion["Sur"] = 2] = "Sur";
    Direccion[Direccion["Oeste"] = 3] = "Oeste";
})(Direccion || (Direccion = {}));
let irA = Direccion.Norte;
let irB = Direccion.Este;
let irC = Direccion.Sur;
let irD = Direccion.Oeste;
console.log(`La dirección seleccionada es ${irA}`);
console.log(`La dirección seleccionada es ${irB}`);
console.log(`La dirección seleccionada es ${irC}`);
console.log(`La dirección seleccionada es ${irD}`);
var EstadoCarga;
(function (EstadoCarga) {
    EstadoCarga["CARGANDO"] = "LOADING";
    EstadoCarga["EXITO"] = "SUCCESS";
    EstadoCarga["ERROR"] = "FAILED";
})(EstadoCarga || (EstadoCarga = {}));
;
let estadoActual1 = EstadoCarga.CARGANDO;
console.log(`El estado de la carga es: ${estadoActual1}`);
let estadoActual2 = EstadoCarga.EXITO;
console.log(`El estado de la carga es: ${estadoActual2}`);
let estadoActual3 = EstadoCarga.ERROR;
console.log(`El estado de la carga es: ${estadoActual3}`);
function procesarReultado(estado) {
    if (estado === EstadoCarga.EXITO) {
        console.log("Datos cargados correctamente");
    }
    else if (estado === EstadoCarga.ERROR) {
        console.error("Hubo una falla en la carga");
    }
}
procesarReultado(EstadoCarga.EXITO);
procesarReultado(EstadoCarga.ERROR);
/**
 * La siguiente instrucción genera un error dado que el argumento
 * no se encuentra dentro del enum EstadoCarga
 */
//procesarReultado('SUCCESS')
//# sourceMappingURL=index.js.map