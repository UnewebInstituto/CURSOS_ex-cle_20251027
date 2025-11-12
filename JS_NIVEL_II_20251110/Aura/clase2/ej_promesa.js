//1- definicion de la funcion hacerpeticion que devuelve promesa
function hacerPeticion (){
  return new Promise((resolve,reject) =>{
    //simulacion de una operacion asincrona exitosa despues de 1 seg
    setTimeout(()=>{
      resolve({id:1, nombre: "Producto A"}); // resuelve promesa
    },1000)
    //si fallara llamariamos a reject reject(new Error("Fallo de red"));
  });
}
// 2- definicion de function procesarDatos(devuelve otra promesa)

function procesarDatos(datos) {
  return new Promise((resolve)=>{
   //simulacion del procesamiento
   const datosProcesados = {
      ...datos, //conjuto de datos
      procesado:true
   };
   resolve (datosProcesados);
  });
  
}

// funcionamiento del codigo
console.log("Caso 1 forma de promesa viejo esquema")
hacerPeticion()
.then((datos)=> {
  console.log ("Datos obtenidos (THEN):", datos);
  return procesarDatos(datos);

})

.then((resultadoProcesado)=>{
  console.log("Resultado final (THEN):", resultadoProcesado);
})
.catch((error)=>{
 console.log("Ocurrio un error (THEN):", error);
});

// asincrono y await segunda forma

async function obtenerYProcesar() {
  try{
    const datos= await hacerPeticion();
    const resultadoProcesado = await procesarDatos(datos);
    console.log("caso 2 forma de promesa nuevo esquema");
    console.log ("Resultado final (ASYNC/AWAIT):", resultadoProcesado);
  }catch (error){
    console.log ("Ocurrio un error (ASYNC/AWAIT):", error);
  }
}

obtenerYProcesar();