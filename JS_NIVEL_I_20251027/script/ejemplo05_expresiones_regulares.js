        // Declaracion de funciones
        const validaControles = () => {
            if (ctrlNombre & ctrlApellido & ctrlCorreo & ctrlTelefono & ctrlClave1 & ctrlClave2){
                // Boton GUARDAR
                document.getElementsByTagName('button')[0].disabled = false;
            }else{
                document.getElementsByTagName('button')[0].disabled = true;
            }
        }

        const validaNombre = () => {
            /*
            https://es.stackoverflow.com/questions/250959/expresion-regular-solo-letras-y-espacios-html
            */
            let expRegNombre = /^[A-Z ]+$/;
            let nombre = document.getElementById('nombre').value;
            /*
            Otra forma
            let nombre = document.getElementsByTagName('input')[0].value;
            */
           if (!expRegNombre.test(nombre)){
                document.getElementById('msjNombre').innerHTML = 'ERROR: Formato en el campo nombre no es valido.';
                document.getElementById('msjNombre').style.color = 'red';
                document.getElementById('msjNombre').style.fontSize = '14px';
                ctrlNombre = false;
           }else{
                document.getElementById('msjNombre').innerHTML = '';
                ctrlNombre = true;
           }
           validaControles();
        }

        const validaApellido = () => {
           let expRegApellido = /^[A-Z ]+$/;
           let apellido = document.getElementById('apellido').value;
           if (!expRegApellido.test(apellido)){
                document.getElementById('msjApellido').innerHTML = 'ERROR: Formato en el campo apellido no es valido.';
                document.getElementById('msjApellido').style.color = 'red';
                document.getElementById('msjApellido').style.fontSize = '14px';
                ctrlApellido = false;
           }else{
                document.getElementById('msjApellido').innerHTML = '';
                ctrlApellido = true;
           }
           validaControles();
        }

        const validaCorreo = () => {
            /*
                https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
            */
           let expRegCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
           let correo = document.getElementById('correo').value;
           if (!expRegCorreo.test(correo)){
                document.getElementById('msjCorreo').innerHTML = 'ERROR: Formato en el campo correo no es valido.';
                document.getElementById('msjCorreo').style.color = 'red';
                document.getElementById('msjCorreo').style.fontSize = '14px';
                ctrlCorreo = false;
           }else{
                document.getElementById('msjCorreo').innerHTML = '';
                ctrlCorreo = true;
           }
           validaControles();
        }

        const validaTelefono = () => {
            /*
            https://gemini.google.com/app/94824156db8fbc7e?hl=es
            */
           let expRegTelefono = /^\+58[ .-]?(?:[0-9]{3})[ .-]?[0-9]{7}$/;
           let telefono = document.getElementById('telefono').value;
           if (!expRegTelefono.test(telefono)){
                document.getElementById('msjTelefono').innerHTML = 'ERROR: Formato en el campo telefono no es valido.';
                document.getElementById('msjTelefono').style.color = 'red';
                document.getElementById('msjTelefono').style.fontSize = '14px';
                ctrlTelefono = false;
           }else{
                document.getElementById('msjTelefono').innerHTML = '';
                ctrlTelefono = true;
           }
           validaControles();
        }

        const validaClave1 = () => {
            /*
https://es.stackoverflow.com/questions/4300/expresiones-regulares-para-contrase%C3%B1a-en-base-a-una-politica
            */
           let expRegClave1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{7,15}[^'\s]/;
           let clave1 = document.getElementById('clave1').value;
           let clave2 = document.getElementById('clave1');
           if (!expRegClave1.test(clave1)){
                document.getElementById('msjClave1').innerHTML = 'ERROR: Formato en el campo clave no es valido.';
                document.getElementById('msjClave1').style.color = 'red';
                document.getElementById('msjClave1').style.fontSize = '14px';
                clave2.value = '';
                ctrlClave1 = false;
           }else{
                document.getElementById('msjClave1').innerHTML = '';
                ctrlClave1 = true;
           }
           validaControles();
        }

        const validaClave2 = () => {
           let clave1 = document.getElementById('clave1').value;
           let clave2 = document.getElementById('clave2').value;
           if (!(clave1 == clave2) & !ctrlClave1){
                document.getElementById('msjClave2').innerHTML = 'ERROR: En el campo repetir clave.';
                document.getElementById('msjClave2').style.color = 'red';
                document.getElementById('msjClave2').style.fontSize = '14px';
                ctrlClave2 = false;
           }else{
                document.getElementById('msjClave2').innerHTML = '';
                ctrlClave2 = true;
           }
           validaControles();
        }

        // Declaracion de variables
        var ctrlNombre, ctrlApellido, ctrlTelefono, ctrlCorreo, ctrlClave1, ctrlClave2;
        
        // Cuerpo Principal del programa
        ctrlNombre = ctrlApellido = ctrlTelefono = ctrlCorreo = ctrlClave1 = ctrlClave2 = false;

