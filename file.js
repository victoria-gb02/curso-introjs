// Ejercicio 1 
let edad = 25;  // Puedes cambiar este valor según lo necesites
let peso = 70;  // Puedes cambiar este valor también

// Ejercicio 2 
// Pedimos los datos al usuario
let nombre = prompt("¿Cuál es tu nombre?");
edad = prompt("¿Cuál es tu edad?");
peso = prompt("¿Cuál es tu peso?");

// Mensaje personalizado
alert(`Hola ${nombre}, tienes ${edad} años y tu peso es ${peso} kg.`);

// Ejercicio 3 – Validación de Edad
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 99;

// Solicitamos la edad y la convertimos a número entero
let edadIngresada = parseInt(prompt("Por favor, ingresa tu edad para validarla:"));

// Validamos si la edad está dentro del rango permitido
if (edadIngresada >= EDAD_MINIMA && edadIngresada <= EDAD_MAXIMA) {
    alert("¡Edad válida! Puedes continuar.");
} else {
    alert("Edad no válida. Debes tener entre 18 y 99 años.");
}
