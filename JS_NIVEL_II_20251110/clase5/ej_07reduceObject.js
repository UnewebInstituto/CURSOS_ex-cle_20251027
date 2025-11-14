const productos = [
    {nombre:'Manzana',categoria:'Fruta'},
    {nombre:'Lechuga',categoria:'Verdura'},
    {nombre:'Platano',categoria:'Fruta'},
    {nombre:'Zanahoria',categoria:'Verdura'}
];

const agrupados = productos.reduce((acumulador, productoActual)=>{
    const categoria = productoActual.categoria;

    if (!acumulador[categoria]){
        acumulador[categoria] = [];
    };

    acumulador[categoria].push(productoActual.nombre);

    return acumulador;
},{});

console.log(agrupados);