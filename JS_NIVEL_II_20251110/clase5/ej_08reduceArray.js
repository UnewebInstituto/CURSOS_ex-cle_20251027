const colecciones = [
    [1,2],
    [3,4,5],
    [6]
];

const aplanado = colecciones.reduce((acumulador, arrayActual)=>{
    return acumulador.concat(arrayActual);
},[]);

console.log(aplanado);