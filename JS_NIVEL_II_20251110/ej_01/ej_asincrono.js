function obtenerDatosDeUsuario(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id:101, nombre:'Alice',email:'alice@ejemplo.com'});
        },2000)
    })
}

async function mostrarDatos(){
    console.log('1.- Iniciando la obtencion de los datos');
    // await: Pausa la funcion hasta que la promesa se resuelva
    // despues de 2 segundos.
    const datos = await obtenerDatosDeUsuario();

    console.log('2.- Datos obtenidos satisfactoriamente');
    console.log('3.- Usuario:',datos.nombre);

}

// Cuerpo principal
mostrarDatos();