const precios = [2.5,5.0,1.75,10.0];

const total = precios.reduce((suma,precioActual)=>{
    return suma + precioActual;
},0); 
console.log(total);