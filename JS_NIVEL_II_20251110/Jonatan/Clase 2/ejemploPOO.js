class Automovil{
  constructor(marca,modelo){
    this.marca = marca
    this.modelo = modelo
    this.encendido = false
  }
  encender(){
    this.encendido = true
    return `El ${this.marca} y ${this.modelo} se ha encendido.`
  }

  estado(){
    return this.encendido ? 'El motor esta en marcha' : 'El motor esta apagado'
  }
}
  
//Instancia: crear objetos a aprtir de la clase

const carroDeAura = new Automovil('Ford','Bronco')
const carroDeMaria = new Automovil('Mitsubishi','Montero')
const carroDePaolo = new Automovil('Landrover','4x4')
const carroDeJonatan = new Automovil('Toyota','4Runner')

console.log(carroDeAura.encender())
console.log(carroDeMaria.encender())
console.log(carroDePaolo.encender())
console.log(carroDeJonatan.encender())


console.log(carroDeAura.marca, carroDeAura.modelo, carroDeAura.estado())
console.log(carroDePaolo.marca, carroDePaolo.modelo, carroDePaolo.estado())
console.log(carroDeMaria.marca, carroDeMaria.modelo, carroDeMaria.estado())
console.log(carroDeJonatan.marca, carroDeJonatan.modelo, carroDeJonatan.estado())

