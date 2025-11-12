// 1. Definición de la función hacerPeticion (devuelve promesa)
function hacerPeticion(){
    return new Promise((resolve,reject)=>{
        // Simulación de una operación asincrona exitosa después de 1 seg.
        setTimeout(()=>{
            resolve({id:1, nombre:"Producto A"}); // Resuelve promesa con datos
        },1000)
        // Si fallara,  llmaríamos a reject(new Error("Fallo de red")); 
    });
}

// 2. Definición de la función procesarDatos (devuelve otra promesa)
function procesarDatos(datos) {
    return new Promise((resolve)=>{
        // Simulación del procesamiento
        const datosProcesados = {
            ...datos,
            procesado:true
        };
        resolve(datosProcesados);
    });
}

// Funcionamiento del código
console.log("Caso 1, forma de Promesa viejo esquema");
hacerPeticion()
.then((datos)=>{
    console.log("Datos obtenidos (THEN):", datos);
    return procesarDatos(datos);
})
.then((resultadoProcesado)=>{
    console.log("Resultado final(THEN):",resultadoProcesado);
})
.catch((error)=>{
    console.log("Ocurrio un error (THEN):",error);
});
 

// Otra forma de consumo con asyn/await

async function obtenerYProcesar(){
    try {
        const datos = await hacerPeticion();
        const resultadoProcesado = await procesarDatos(datos);
        console.log("Caso 2, forma de Promesa nuevo esquema");
        console.log("Resultado final (ASYNC/AWAIT):",resultadoProcesado);
    } catch (error) {
        console.log("Ocurrió un error (ASYNC/AWAIT):",error);
    }
}

obtenerYProcesar();
