class Automovil{
  constructor(marca,modelo){
    this.marca = marca;
    this.modelo= modelo;
    this.encendido = false;

  }
  encender (){
    this.encendido=true;
    return `El $ {this.marca} $ {this.modelo} se encendido`;
  }
  estado(){
    return this.encendido? 'El motor esta en marcha': 'El motor esta apagado';
  }
}

const carroDeAura = new Automovil ('FORD', 'BRONCO');
const carroDeMaria = new Automovil ('MITSUBISHI', 'MONTERO');
const carroDePaolo = new Automovil ('LANDROVEN', '4X4');
const carroDeJonathan = new Automovil ('TOYOTA', '4RUNNER');

console.log (carroDeAura.encender());
console.log (carroDeJonathan.encender());
console.log(carroDeMaria.encender());
console.log(carroDePaolo.encender());

console.log(carroDeAura.marca,carroDeAura.modelo,carroDeAura.estado());
console.log(carroDeJonathan.marca,carroDeJonathan.modelo,carroDeJonathan.estado());
console.log(carroDeMaria.marca,carroDeMaria.modelo,carroDeMaria.estado());
console.log(carroDePaolo.marca,carroDePaolo.modelo,carroDePaolo.estado());