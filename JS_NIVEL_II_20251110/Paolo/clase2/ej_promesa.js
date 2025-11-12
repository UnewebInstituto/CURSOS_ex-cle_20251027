console.log("caso 1, forma de promesa viejo ");
function hacerPeticion(){
  return new Promise((resolve,reject)=>{
    //simulación de una operación asincrona exitosa después de 1 seg.
    setTimeout(() => {
      resolve({id:1,nombe:"Producto A"})
    }, 1000);
    //Si fallara llamariamos a reject(new Error("fallo de red"));
  });
}

function procesarDatos(datos){
  return new Promise((resolve)=>{
    const datosProcesados ={
      ...datos,
      procesado:true
    };
    resolve(datosProcesados);
  });
}

// Funcionamiento 
hacerPeticion().then((datos)=>{
  console.log("Datos obtenidos (THEN:", datos);
  return procesarDatos(datos);
}).then((resultadoProcesado)=>{
  console.log("Resultado final(THEN):",resultadoProcesado);
}).catch((error)=>{
  console.error("Ocurrio un error (THEN):",error);
})

async function obtenerYProcesar() {
  try{
    const datos=await hacerPeticion();
    const resultadoProcesado =await procesarDatos(datos);
    
  console.log("caso 2, forma de promesa nuevo esquema");

  console.log("Resultado final (ASYNC/AWAIT: ",resultadoProcesado);

  }
  catch(error){
    console.error("Ocuriun error (ASYNC/AWAIT: ",error);
  }
}
console.log("caso 3, forma de promesa nuevo esquema");
obtenerYProcesar();

