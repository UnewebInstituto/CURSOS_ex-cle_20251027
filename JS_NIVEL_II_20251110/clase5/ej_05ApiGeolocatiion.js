const obtenerUbicacion = () =>{
    if (!navigator.geolocation){
        resultado.innerHTML = 'ERROR: Su navegador no soporta Geolocaliozacion';
    }else{
        navigator.geolocation.getCurrentPosition(accesoUbicacion, manejoError);
    }
}

const accesoUbicacion = (p) => {
    console.log(p);
    resultado.innerHTML = `Latitud: ${p.coords.latitude}, Longitud: ${p.coords.longitude}`;
    document.getElementById('btnVer').disabled = false;
    latitud = parseFloat(p.coords.latitude);
    longitud = parseFloat(p.coords.longitude);
    console.log(latitud);
    console.log(longitud);
}

const manejoError = (e) =>{
    console.log(e);
    switch (e.code) {
        case 1:
        case 2:
        case 3: 
            resultado.innerHTML = e.message;
            break;
        default:
            resultado.innerHTML = 'ERROR Desconocido';
            break;
    }
}

const verMapa = () =>{
    let url = `https://www.openstreetmap.org/#map=15/${latitud}/${longitud}`;
    window.open(url);
}

// Variable globales
let resultado = document.getElementById('resultado');
let latitud, longitud;