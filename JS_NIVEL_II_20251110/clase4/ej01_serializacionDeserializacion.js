// 1.- Declaracion del objeto JSON
const usuario = {
    id:1,
    nombre:'Alice',
    activo:true,
    roles:['admin','editor']
};

console.log('Tipo de usuario:', typeof(usuario));
const usuarioJSON = JSON.stringify(usuario);
console.log('tipo de usuarioJSON:', typeof(usuarioJSON));
console.log('Contenido de usuarioJSON:',usuarioJSON);

const usuarioOriginal = JSON.parse(usuarioJSON);
console.log('tipo de usuarioOriginal:', typeof(usuarioOriginal));
console.log(`Contenido de usuarioOriginal: \n ${usuarioOriginal.id}, ${usuarioOriginal.nombre}, ${usuarioOriginal.activo}, ${usuarioOriginal.roles}, ${usuarioOriginal.roles[0]}, ${usuarioOriginal.roles[1]} `);

