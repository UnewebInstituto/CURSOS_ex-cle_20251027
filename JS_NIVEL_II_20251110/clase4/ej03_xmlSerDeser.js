const xmlString = `
    <libros>
        <libro id='101'>
            <titulo>Cien A#os de Soledad</titulo>
            <autor>Gabriel Garcia Marquez</autor>
        </libro>
        <libro id='102'>
            <titulo>Maria</titulo>
            <autor>Jorge Isaac</autor>
        </libro>
        <libro id='103'>
            <titulo>Los Miserables</titulo>
            <autor>Victor Hugo</autor>
        </libro>
    </libros>
`;
const parser = new DOMParser();

const xmlDoc = parser.parseFromString(xmlString,'text/xml');

let tituloElemento = new Array();
let autorElemento = new Array();
let idElemento = new Array();

const libros = xmlDoc.getElementsByTagName('libro');

for (let i = 0; i < libros.length; i++){
    const libro = libros[i]; 
    const id = libro.getAttribute('id');
    //console.log(id);
    const autor = libro.getElementsByTagName('autor')[0].textContent;
    //console.log(autor);
    const titulo = libro.getElementsByTagName('titulo')[0].textContent;
    //console.log(titulo);
    
    idElemento.push(id);
    autorElemento.push(autor);
    tituloElemento.push(titulo);
    
}


tituloElemento.forEach((tituloElement)=>{
    console.log(tituloElement);
});

console.log('-----');
for (let index = 0; index < tituloElemento.length; index++) {
    console.log(idElemento[index], autorElemento[index], tituloElemento[index]);
}
    