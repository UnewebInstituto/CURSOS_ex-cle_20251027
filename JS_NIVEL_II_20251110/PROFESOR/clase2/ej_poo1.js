class CuentaBancaria{
    // Atributo privado a la clase
    #saldo = 0;

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    depositar(monto){
        if (monto > 0){
            this.#saldo += monto;
        }
    }

    verSaldo(){
        return `Saldo de la cuenta: ${this.#saldo}`;
    }
}

// Crear la cuenta

const miCuenta = new CuentaBancaria(1);
miCuenta.depositar(987);
console.log(miCuenta.verSaldo());

