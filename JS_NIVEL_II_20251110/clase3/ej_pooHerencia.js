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

class Bicicleta extends Automovil  {
    // Declaracion de constructor y llamado al metodo super()
    constructor(marca, modelo, tipo) {
        super(marca, modelo);
        this.tipo = tipo;
    }

    // Sobre escritura del metodo estado()
    estado(){
        return `La bicicleta ${this.marca}, es del tipo ${this.tipo}`;
    }
}



// Instancia: Crear objetos a partir de la clase
/*
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

*/


const miBici = new Bicicleta('Trek','FX','Hibrida');

console.log(miBici.estado());

// Prueba de Polimorfismo

const miCarro = new Automovil('CHEVROLET','VITARA');
miCarro.encender();
console.log(miCarro.estado());