config = {
    tema: 'oscuro',
    notificaciones: true,
    idioma: 'es'
}
// Nombres de indices
const claves = Object.keys(config);
// Valores contenidos
const valores = Object.values(config);
// Pares de informacion
const pares = Object.entries(config);
console.log('Atributos de Objeto config');
console.log(claves);
console.log('Valores del Objeto');
console.log(valores);
console.log('Pares de informacion del Objeto');
console.log(pares);