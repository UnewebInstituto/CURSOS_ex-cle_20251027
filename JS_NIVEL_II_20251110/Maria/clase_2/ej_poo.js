class Automovil {
    //declaracion de metodos 
    constructor (marca, modelo) {
        this.marca = marca; 
        this.modelo = modelo;
        this.encendido = false;

    }
    encender(){
        this.encendido = true;
        return`el ${this.marca} ${this.modelo} se ha encendido`;

    }
    estado(){
        return this.encendido? ' el motor esta encendido': 'el motor esta apagado'; 

    }
}

// instancia, crear objetos a partir de la clase 

const carroDeAura = new Automovil('ford', 'escape');
const carroDeMaria = new Automovil('mitsubichi', 'montero');
const carroDePaolo = new Automovil('Landrover','4x4');
const carroDeJonatan = new Automovil('toyota','4runner');

console.log(carroDeAura.encender());
console.log(carroDeMaria.encender());
console.log(carroDePaolo.encender());
console.log(carroDeJonatan.encender());

console.log(carroDeAura.marca,carroDeAura.modelo, carroDeAura.estado()); 
console.log(carroDeMaria.marca, carroDeMaria.modelo, carroDeMaria.estado());
console.log(carroDePaolo.marca,carroDePaolo.modelo, carroDePaolo.estado());
console.log(carroDeJonatan.modelo,carroDeJonatan.marca, carroDeJonatan.estado()); 
