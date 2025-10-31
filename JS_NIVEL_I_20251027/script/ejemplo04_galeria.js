        // Declaracion de funciones
        const cambiar = (imagen) =>{
            let imagen_principal = document.getElementById('imagen_principal');
            imagen_principal.src = imagen;
        }

        const obtenerFechaHora = () =>{
            let dataFechaHora = new Date();
            let aa = dataFechaHora.getFullYear();
            let mm = dataFechaHora.getMonth();
            let dd = dataFechaHora.getDate();
            let hr = dataFechaHora.getHours();
            let mi = dataFechaHora.getMinutes();
            let se = dataFechaHora.getSeconds();
            let diaSemana = dataFechaHora.getDay();
            let ampm = 'AM';
            let salidaFechaHora = dia[diaSemana];
            salidaFechaHora += ` ${dd} de ${mes[mm]} de ${aa}`;
            if (hr > 12){
                hr = hr - 12;
                ampm = 'PM';
            }
            if (hr == 12){
                ampm = 'PM';
            }
            if (mi < 10){
                mi = '0' + mi;
            }
            if (se < 10){
                se = '0' + se;
            }
            salidaFechaHora += ` ${hr}:${mi}:${se} ${ampm}`;
            //console.log(salidaFechaHora);
            fechaHora.innerHTML = salidaFechaHora;
        }

        // Declaracion de variables
        mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        dia = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        // Se accede al 1er h2 del DOM
        var fechaHora = document.getElementsByTagName('h2')[0];
        // Cuerpo principal del programa
 
        obtenerFechaHora(); 
        // Cada segundo se actualizara
        // 1ra. Forma
        setInterval(obtenerFechaHora, 1000);

        //setTimeout(obtenerFechaHora, 1000);


