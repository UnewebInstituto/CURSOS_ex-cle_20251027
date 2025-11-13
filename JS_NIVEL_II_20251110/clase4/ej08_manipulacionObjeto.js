let coche={
    marca:'TOYOTA',
    modelo:'COROLLA',
    color:'ROJO'
}
console.log(coche);

// Modificacion
coche.color = 'AZUL';
// Adicion de propiedad
coche.anio = 2020;
console.log(coche);

const clave = 'modelo';
console.log(`El valor de ${clave} es ${coche[clave]}`);

// Eliminacion
delete coche.marca;

console.log(coche);

console.log(Object.keys(coche));
console.log(Object.values(coche));
console.log(Object.entries(coche));