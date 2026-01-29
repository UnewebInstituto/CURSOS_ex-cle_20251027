// Caso 1, recibe parámetros y retorna un valor
function calcularIVA(precioBase:number, tasaIVA:number):number{
    return precioBase * tasaIVA;
}

let precioArticulo:number = 100;
let valorIVA:number = 0.16; // 16% de IVA

console.log(`El IVA para el artículo de precio ${precioArticulo.toFixed(2)}, cuyo factor de IVA es ${valorIVA*100}% es ${calcularIVA(precioArticulo,valorIVA)}`)

// Caso 2, recibe parámetros pero no retorna valor

function logearAccion(accion:string):void{
    console.log(`[LOG] Acción realizada: ${accion}`);
}

logearAccion('Cálculo de IVA procesado con éxito');

// Parámetros opcionales y por defecto

function formatearMoneda(cantidad:number, simbolo?:string){
    if (simbolo){
        return `${simbolo} ${cantidad.toFixed(2)}`; 
    }
    return `${cantidad.toFixed(2)}`;
}

console.log(formatearMoneda(1500.50, '$'));
console.log(formatearMoneda(1500.50));

// Caso por defecto

function calcularImpuesto(monto:number, tasa:number = 0.16):number{
    return monto * tasa;
}

console.log(calcularImpuesto(200));
console.log(calcularImpuesto(200, 0.10));

// Clases y Tipado de Clases

class CuentaBancaria{
    // atributos de la clase
    numeroCuenta:string = '';
    saldo:number = 0;

    // constructor
    /**
     * Es un método especial que permite la inicialización del objeto al momento que se instancia la clase
     */
    constructor(numero:string, saldoInicial:number){
        this.numeroCuenta = numero;
        this.saldo = saldoInicial;
        console.log(`Cuenta creada con número ${this.numeroCuenta} y saldo inicial ${this.saldo}`);
    }

    // método tipado
    depositar(cantidad:number):void{
        this.saldo += cantidad;
        /**
         * La operación anterior es equivalente a 
         * this.saldo = this.saldo + cantidad;
         */
        logearAccion(`Depósito de ${cantidad}`);
    }

    obtenerSaldo():number{
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

class Usuario{
    // Métodos de la clase
    constructor(
        
        private id:number,
        public nombre:string,
        protected token:string,
        public readonly fechaCreacion:Date = new Date()
        /*
        // Caso en que todos los atributos son públicos
        public id:number,
        public nombre:string,
        public token:string,
        public fechaCreacion:Date = new Date()
        */
    ){}

    getId():number{
        return this.id;
    }
}

// Creación del objeto user

const user = new Usuario(1,"Alice","xyz-123");

console.log(user.getId());
console.log(user.nombre);
console.log(user.fechaCreacion);


/**
 * La siguiente instrucción no se puede efectuar porque 
 * fechaCreacion es de solo lectura (readonly)
 */

//user.fechaCreacion = new Date();

// Enums

enum Direccion{
    Norte,
    Este,
    Sur,
    Oeste
}

let irA:Direccion = Direccion.Norte;
let irB:Direccion = Direccion.Este;
let irC:Direccion = Direccion.Sur;
let irD:Direccion = Direccion.Oeste;

console.log(`La dirección seleccionada es ${irA}`);
console.log(`La dirección seleccionada es ${irB}`);
console.log(`La dirección seleccionada es ${irC}`);
console.log(`La dirección seleccionada es ${irD}`);


enum EstadoCarga{
    CARGANDO='LOADING',
    EXITO='SUCCESS',
    ERROR='FAILED',
};

let estadoActual1:EstadoCarga = EstadoCarga.CARGANDO;
console.log(`El estado de la carga es: ${estadoActual1}`);
let estadoActual2:EstadoCarga = EstadoCarga.EXITO;
console.log(`El estado de la carga es: ${estadoActual2}`);
let estadoActual3:EstadoCarga = EstadoCarga.ERROR;
console.log(`El estado de la carga es: ${estadoActual3}`);

function procesarReultado(estado:EstadoCarga):void{
    if (estado === EstadoCarga.EXITO){
        console.log("Datos cargados correctamente");
    }else if (estado === EstadoCarga.ERROR){
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


