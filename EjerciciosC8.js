// EJERCICIOS

// Declará una variable con tu nombre y otra con tu edad.
// Mostrá ambos valores usando console.log().
let nombre = "Victoria";
let edad = 32;
console.log(nombre, edad);

// **2. SUMA DE 2 NUMEROS**
// Declara las variables - num1 - num2 - resultado.
// Realiza los calculos utilizando las variables (num1 y num2)
// Mostra el resultado usando console.log()
let num1 = 10;
let num2 = 20;
let resultado = num1 + num2;
console.log(resultado);

// **3. CALCULOS SIMPLES**
// Pedile al usuario dos numeros.
// Recorda usar parseInt() para convertir texto a numero y prompt() para pedir la info al usuario
const prompt = require('prompt-sync') (); // Importante para poder usar prompt
let num3 = parseInt(prompt("Ingrese un número"));
let num4 = parseInt(prompt("Ingrese otro número"));

// Realiza los calculo de suma - resta - multiplicacion y division
let suma = num3 + num4;
let resta = num3 - num4;
let multiplicacion = num3 * num4;
let division = num3 / num4;

// Mostrar el resultado de cada calculo usando console.log()´
console.log(suma); 
console.log(resta);
console.log(multiplicacion);
console.log(division);

// **4. CONCATENACION UTILIZANDO OPERADOR (+)**
// Utilizá las variables que creaste de nombre y edad
// Mostra en consola el mensaje "Mi nombre es: (tuvariable) y tengo (tuvariable) años"
console.log("Mi nombre es: " + nombre + " y tengo " + edad + " años");

// **5. CONCATENACION UTILIZANDO TEMPLATE LITERALS (`${}`)**
// Mostrar el mismo mensaje anterior pero usando las backtics
console.log(`Mi nombre es: ${nombre} y tengo ${edad} años`);

// **6. BOOLEANOS Y CONDICIONALES**
// Declarar una variable nota con un numero.
// Si la nota es mayor o igual a 6
// Mostrar "Aprobado"
// Sino mostrar "Desaprobado"

let nota = 7;
if (nota >= 6) {
    console.log("Aprobado");
}
else {
    console.log("Desaprobado");
}

// **7. PAR E IMPAR**
// Declara una variable con un numero y usa el operador (%) para saber si es par o impar.
// Mostrá ambos resultados con console.log() - "el numero es par" o "el numero es impar"
let numero = 10;
if (numero % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar");
}   

// Realiza el mismo ejercicio pero solicitando un número al usuario y mostra también el resultado.
let numero2 = parseInt(prompt("Ingrese un número"));
if (numero2 % 2 === 0) {
    console.log("El número es par");
}
else {
    console.log("El número es impar");
}   

// **8. CALCULADORA INTERACTIVA**
// Pedile al usuario dos números y que elija una operación aritmética (suma, resta, multiplicación, división), utilizando prompt(). 


let num5 = parseInt(prompt("Ingrese un número"));
let num6 = parseInt(prompt("Ingrese otro número")); 
let operacion = prompt("Elija una operación aritmética: suma, resta, multiplicación o división");
console.log(num5, num6, operacion);

// Según la operación elegida, realizá el cálculo y mostrá el resultado con console.log().
if (operacion === "suma") {
    console.log(num5 + num6);
}
else if (operacion === "resta") {
    console.log(num5 - num6);
}
else if (operacion === "multiplicación") {
    console.log(num5 * num6);
}
else if (operacion === "división") {
    console.log(num5 / num6);
}
else {
    console.log("Operación inválida");
}   


