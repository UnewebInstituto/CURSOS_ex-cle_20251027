const numeros=[10,5,25,8,15,30];

// Filtrar numeros mayores a 12

const mayoresA12 = numeros.filter(numero=>numero>12);

console.log('Arreglo numero originales');
numeros.forEach((numero)=>{
    console.log(numero)
});

console.log('Arreglo de numeros > 12');
mayoresA12.forEach((numero)=>{
    console.log(numero)
});
