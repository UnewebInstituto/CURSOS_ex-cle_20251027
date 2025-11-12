class Automovil{
    // Declaración de métodos
    constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;
        this.encendido = false;
    }

    encender(){
        this.encendido = true;
        return `El ${this.marca} ${this.modelo} se ha encendido`;
    }

    estado(){
        return this.encendido?'El motor está en marcha':'El motor está apagado';
    }
}

// Instancia: Crear objetos a partir de la clase
const carroDeAura = new Automovil('FORD','BRONCO');
const carroDeMaria = new Automovil('MITSUBISHI','MONTERO');
const carroDePaolo = new Automovil('LANDROVER','4X4');
const carroDeJonatan = new Automovil('TOYOTA','4RUNNER');

console.log(carroDeAura.encender());
console.log(carroDeMaria.encender());
console.log(carroDePaolo.encender());
console.log(carroDeJonatan.encender());

console.log(carroDeAura.marca, carroDeAura.modelo, carroDeAura.estado());
console.log(carroDeMaria.marca, carroDeMaria.modelo, carroDeMaria.estado());
console.log(carroDePaolo.marca, carroDePaolo.modelo, carroDePaolo.estado());
console.log(carroDeJonatan.marca, carroDeJonatan.modelo, carroDeJonatan.estado());