const libro ={
    titulo: 'Cien a#os de soledad',
    autor: 'Gabriel Garcia Marquez',
    paginas: 496,
    genero: 'Realismo magico'
}

console.log('Valor de atributos del objeto libro');
console.log(`TITULO:${libro.titulo}, AUTOR:${libro.autor}, PAGINAS:${libro.paginas}, GENERO:${libro.genero}`);


const frutas = ['manzana','banana','kiwi', 'mango'];

console.log('Cotenido de la 1era. posicion de frutas:', frutas[0]);

const frutasMayuscula = frutas.map(fruta => fruta.toUpperCase());

console.log('Contenido del arreglo frutas en Mayuscula', frutasMayuscula);

