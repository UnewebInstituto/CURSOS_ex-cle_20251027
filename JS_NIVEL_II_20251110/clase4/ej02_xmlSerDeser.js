const xmlString = `
    <libro id='101'>
        <titulo>Cien A#os de Soledad</titulo>
        <autor>Gabriel Garcia Marquez</autor>
    </libro>
`;
const parser = new DOMParser();

const xmlDoc = parser.parseFromString(xmlString,'text/xml');

const tituloElemento = xmlDoc.getElementsByTagName('titulo')[0];
const autorElemento = xmlDoc.getElementsByTagName('autor')[0];

const titulo = tituloElemento ? tituloElemento.textContent:'No encontrado';
const idLibro = xmlDoc.documentElement.getAttribute('id');

console.log(`Titulo: ${titulo}`);
console.log(`Id del libro: ${idLibro}`);