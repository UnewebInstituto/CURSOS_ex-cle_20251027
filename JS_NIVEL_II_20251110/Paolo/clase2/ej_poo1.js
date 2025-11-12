class CuentaBancaria{
  #saldo = 0;

  constructor(saldoInicial){
    this.#saldo = saldoInicial;
  }

  depositar(monto){
    if(monto > 0){
      this.#saldo +=monto;
    }
  }

  verSaldo(){
    return `Saldo actual es: ${this.#saldo}`;
  }
}

const miCuenta = new CuentaBancaria(100);

miCuenta.depositar(300);

console.log(miCuenta.verSaldo());

