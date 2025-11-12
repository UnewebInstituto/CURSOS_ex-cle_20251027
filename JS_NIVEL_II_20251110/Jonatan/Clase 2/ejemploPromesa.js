// 1. Definicion de la funcion hacerPeticion que devuelve promesa
function hacerPeticion(){
    return new Promise((resolve, reject) => {
      //Simulacion de una operacion asincrona exitosa despues de un segundo.
      setTimeout(() =>{
        resolve({id:1, nombre:"Producto A"})// Resuelve promesa con Datos
      },1000)
      //Si fallara, llamariamos a reject(newError("Fallo de red"));
    });
}

// 2. Definicion de la funcion procesarDatos (Devuelve otra promesa)
function procesarDatos(datos){
    return new Promise((resolve) => {
      //Simulacion de procesamiento
      const datosProcesados = {
        ...datos,
        procesado:true 
      };
      resolve(datosProcesados);
    });
}

//Funcionamiento del codigo
console.log("Caso 1, forma de Promesa viejo esquema")
hacerPeticion()
.then((datos) =>{
  console.log("Datos obtenidos con el (THEN):",datos)
  return procesarDatos(datos)
})
.then((resultadoProcesado)=>{
  console.log("Resultado final del (THEN):",resultadoProcesado)
})
.catch((error)=>{
  console.log("Ocurrio un error en el(THEN)",error)
})

//Otra forma de consumo con async/await

async function obtenerYProcesar(){
  try{
    const datos = await hacerPeticion()
    const resultadoProcesado = await procesarDatos()
    console.log("Caso 2, forma de Promesa viejo esquema")
    console.log("Resultado final (ASYNC/AWAIT):",resultadoProcesado)
  } catch(error){
    console.log("Ocurrio un error (ASYNC/AWAIT):",error)

  }
}

obtenerYProcesar();