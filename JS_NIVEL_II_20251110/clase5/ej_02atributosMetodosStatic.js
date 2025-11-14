class Calculadora{
    // Atributo estatico
    static PI = 3.1416;
    // Metodo estatico
    static sumar(a,b){
        return a+b;
    };
    // Metodo de la clase
    restar(a,b){
        return a-b;
    }
}
// Llamado a atributo y metodo estatico
console.log(Calculadora.PI);
console.log(Calculadora.sumar(1,2));

// Instancia de la clase
const calc = new Calculadora();
console.log(calc.restar(9,7));

