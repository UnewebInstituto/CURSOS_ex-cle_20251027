const frutas = ['manzana','banana','manzana','pera','banana','manzana'];

const conteo = frutas.reduce((contador,fruta)=>
{
    contador[fruta] = (contador[fruta] || 0) + 1;
    return contador;
},{});

console.log(conteo);
