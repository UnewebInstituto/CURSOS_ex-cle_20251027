class CuentaBancaria{
  //Atributo pribvado a la calse
  #saldo = 0

  constructor(saldoInciial){
    this.#saldo = saldoInciial
  }

  depositar(monto){
    if(monto>0){
      this.#saldo += monto
    }
  }

  verSaldo(){
     return `Saldo de la cuenta: ${this.#saldo}`
  }

}
  //Crar la cuenta

  const miCuenta = new CuentaBancaria(1);
  miCuenta.depositar(900)
  console.log(miCuenta.verSaldo(miCuenta.verSaldo()))

