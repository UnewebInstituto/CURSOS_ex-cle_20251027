//1. Definicion de la funcion, hacerPeticion, devuelve promesa
function hacerPeticion(){
    return new Promise((resolve,reject)=> {
        // simulacion de una operacion asincrona despues de 1 seg. 
        setTimeout(()=> {
            resolve({id:1, nombre:"producto A"}); //resuelve promesa
        },1000)
        //Si fallara llamariamos a reject(new error("Fallo de red"));

    });
}

//2. Definicion de la funcion, procesarDatos (devuelve otra promesa)
function procesarDatos(datos) { 
    return new Promise((resolve)=>{
        //simuulacion del procesamiento 
        const datosProcesados = {
            ...datos,
            procesado:true
        };
        resolve(datosProcesados);
    });
}

//funcionamiento del codigo 
console.log("caso 1, forma de promesa viejo esquema");

hacerPeticion().then((datos)=> {
    console.log("datos obtenidos con el (them):", datos);
    return procesarDatos(datos);
})
.then((resultadoProcesado)=> {
    console.log("resultado final(THEM):", resultadoProcesado);
})
.catch((error)=>{
    console.log ("ocurrio un error (them):", error);
})


// otra forma de hacer promesa (mas eficiente) async/away 


async function obtenerYProcesar() {
    try{
        const datos = await hacerPeticion();
        const resultadoProcesado = await procesarDatos(datos);
        console.log("Caso 2, Cambio de promesa nuevo esquema:");
        console.log("resultado final (Async/await):",resultadoProcesado);

    } catch (error) {
        console.log ("ocurrio un error (async/await):", error);
    }
    
}

obtenerYProcesar();