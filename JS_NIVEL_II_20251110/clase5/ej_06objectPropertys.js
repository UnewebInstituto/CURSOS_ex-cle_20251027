// Se crea objeto vacio
const app = {};

// Asigna propiedad al objeto
app.nombre = "MiApp";

Object.defineProperty(app, 'API_KEY',{
    value:'abcd-1234-efgh',
    writable:false,
    enumerable:false,
    configurable:false
})

// Contenido
console.log(app.nombre);
console.log(app.API_KEY);

console.log('Se intenta cambiar el nombre');
app.API_KEY = 'NVO. NOMBRE';
console.log(app.API_KEY);

console.log(Object.keys(app));

delete app.API_KEY;
console.log(app.API_KEY);


