// Declaracion de variables
const nombre = 'Juan';
let edad = 25;
const esMayorDeEdad = true;
let notas = [8, 9, 7]

console.log('Contenido de variables:')
console.log('nombre',nombre);
console.log('edad:',edad);
console.log('esMayorDeEdad:',esMayorDeEdad);
console.log('notas:',notas);

console.log('Resultado del condicional');
if (edad >= 18){
    console.log(nombre + ', puede votar');
}else{
    console.log(nombre + ', no puede votar');
}

console.log('Estructuras Repetitivas');
console.log('Caso For');
for (let i=0; i < notas.length; i++){
    console.log('Nota', (i+1), ':', notas[i]);
}

console.log('Caso while');
let i = 0;
while (i < notas.length){
    console.log('Nota', (i+1), ':', notas[i]);
    i += 1; // i = i + 1
}

console.log('Caso do');
i = 0;
do{
    console.log('Nota', (i+1), ':', notas[i]);
    i += 1; // i = i + 1
} while (i < notas.length);


console.log('Uso de Funciones Flecha');
const saludar = (n) =>{
    //console.log(`Hola, ${n}`);
    return `Hola, ${n}`;
}

//saludar('HENRY');
console.log(saludar('HENRY DUQUE'));


