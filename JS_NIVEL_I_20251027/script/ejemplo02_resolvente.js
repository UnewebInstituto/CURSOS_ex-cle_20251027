// 1-Declaración de dependencias
// NO HAY

// 2-Declaración de funciones
function calcular(){
    a = parseFloat(document.getElementById('a').value);
    b = parseFloat(document.getElementById('b').value);
    c = parseFloat(document.getElementById('c').value);
    if (a == 0){
        resultado.innerHTML = "ERROR: El valor de 'a' debe ser diferente de 0.";
        resultado.className="mensaje error";
    }else{
        subRadical = Math.pow(b,2) - 4 * a * c;
        if (subRadical < 0){                
            resultado.innerHTML = "ATENCIÓN: El valor de 'expresión sub radical' no debe ser negativo.";
            resultado.className="mensaje alerta";
        }else{
            x1 = (-b + Math.sqrt(subRadical))/(2*a);
            x2 = (-b - Math.sqrt(subRadical))/(2*a);
            resultado.innerHTML = `x1 = ${x1}<br>x2 = ${x2}`;
            resultado.className="mensaje exito";
        }
    }
}

const limpiar = () =>{
    document.getElementById('a').value = '0';
    document.getElementById('b').value = '0';
    document.getElementById('c').value = '0';
    resultado.innerHTML = '';
    resultado.className = '';
}

// 3-Declaración de variables
var a, b, c, subRadical, resultado, x1, x2, btnCalcular;

// 4-Cuerpo principal del prograna
btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click',calcular);
resultado = document.getElementById('resultado');

