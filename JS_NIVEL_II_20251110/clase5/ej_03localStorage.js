// 1.- Creacion del objeto
const configuracion = {
    darkmode:true,
    ultimaVisita:new Date().toLocaleDateString()
};
console.log('Contenido del objeto antes de su procesamiento');
console.log(`Darkmode:${configuracion.darkmode}\nUltima visita: ${configuracion.ultimaVisita}`);

// Guardar el objeto serializado
const configJSON = JSON.stringify(configuracion);
console.log(`Objeto transformado a cadena: ${configJSON}`);

// Se procede a guardar en LOCALSTORAGE
localStorage.setItem('userConfig',configJSON);
console.log('Configuracion guardada con exito');

// Se accede al valor almacenado en LocalStorage
const configGuardadaJSON = localStorage.getItem('userConfig');

// Se crea el objeto por tanto se deserailiza
const configRecuperada = JSON.parse(configGuardadaJSON);

if (configRecuperada){

    // Acceso a los valores de configuracion recuperados

    console.log(`Valores de la configuracion:\nDarkmode:${configRecuperada.darkmode}\nUltima visita: ${configRecuperada.ultimaVisita}`)

    // Se borra contenido almacenado en el localStorage
    //localStorage.removeItem('userConfig');
    console.log('La coniguracion inicial fue borrada');
}else{
    console.log('No se encontro configuracion');
}



