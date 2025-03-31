let num = 1;
while (num <= 5) {
    console.log("num es igual a:" + num);
    num++;
}
let vuelta = 1;
while (vuelta <= 6) {
    console.log(`Dando la vuelta número: ${vuelta}`);
    vuelta++;
}
//const prompt = require('prompt-sync') ();
//let numero = prompt()

let intentos = 0;
do {
    console.log("Intento número: " + intentos);
    intentos++
}while (intentos < 3);

console.log("Fin de los intentos.");

let numero;
do {
    numero = Math.floor(Math.random() * 10);
console.log("Número generado:", numero);
} while (numero !== 7);
console.log("¡Se encontró el 7!");

let miArray = ['Star Wars', true, 23];
let pelisFavoritas = ['Star Wars', 'Kill Bill', 'Alien'];
console.log(pelisFavoritas[2])
console.log(pelisFavoritas.length);

let nombres = ["Ana", "Luis", "Carlos", "Marta"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}
//const matrizDeEdades = 
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

const matrizDeEdades = [
    [20, 45, 22, 50, 13, 12],
    [14, 45, 12, 12, 13, 3],
    [5, 4, 22, 5, 13, 5],
    [9, 73, 12, 5, 8, 31],
];
console.log(matrizDeEdades[3][2]);

let matrizEjemplo = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10],

];

for (let i = 0; i < matrizEjemplo.length; i++) {
    for (let j = 0; j < matrizEjemplo[i].length; j++) {
        console.log("Los números de la matrizEjemplo son:" + matrizEjemplo[i][j]);

    }
}
let butacasCine = [
    ["ocupada", "libre", "ocupada", "ocupada", "libre"],
    ["ocupada", "ocupada", "ocupada", "libre", "ocupada"],
    ["ocupada", "ocupada", "ocupada", "ocupada", "libre"],
    ["ocupada", "libre", "ocupada", "ocupada", "ocupada"],
];

let libre = false;
for (let i = 0; i < butacasCine.length; i++) {
    for (let j = 0; j < butacasCine[i].length; j++) {
        if (butacasCine[i][j] === "libre") {
            libre = true;
            console.log(`La butaca en la fila ${i + 1}, columna ${j + 1} está libre.`
                           );
        }
    }
}

const corazon = [
    [".", "#", ".", ".", ".", "#", "."],
    ["#", "#", "#", ".", "#", "#", "#"],
    ["#", "#", "#", "#", "#", "#", "#"],
    [".", "#", "#", "#", "#", "#", "."],
    [".", ".", "#", "#", "#", ".", "."],
    [".", ".", ".", "#", ".", ".", "."],
];

for (let i = 0; i < corazon.length; i++) {
    let fila = "";
    for (let j = 0; j < corazon[i].length; j++) {
        fila += corazon[i][j] + " ";
    }
    console.log(fila);
}    
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
saludar("Vicky");

function sum (num1 , num2) {
    return num1 + num2
}
console.log(sum(3,4))

let despedir = function (nombre) {
    console.log("Adios, " + nombre + "!");
};
despedir("Vicky");

let triplicar = function (numero) {
    return numero * 3
}
console.log(triplicar(2))

function saludo(nombre = "visitante", apellido = "anónimo") {
    return `Hola ${nombre} ${apellido}`; 
}
console.log(saludo("Victoria", "Garcia Bustos"));
console.log(saludo())

// Map Arrays
let numeros = [2, 4, 6, 8];
let numerosPorDos = numeros.map(function (numero) {
    return numero * 2;
});
console.log(numerosPorDos);

// filter método
let edades = [12, 15, 18, 21, 25, 30];
let mayoresDeEdad = edades.filter(function (edad) {
    return edad >= 18;
}); 
console.log(mayoresDeEdad);

// Reduce método
let numerosR = [2, 4, 6, 8]; 
let suma = numerosR.reduce(function (acumulador, numero) {
    return acumulador + numero;
}, 0);
console.log(suma);

// forEach método
let nombresF = ["Ana", "Luis", "Carlos", "Marta"];
nombresF.forEach(function (nombre) {
    console.log(nombre);
});

function contarMayoresQueTres(Arrays) {
    let contador = 0;
    Arrays.forEach(function (numero) {
        if (numero > 3) {
            contador++;
        }
    });
    return contador;
}

console.log(contarMayoresQueTres([1, 2, 3, 4, 5]));

// find método
let edadesF = [12, 15, 18, 21, 25, 30];
let mayorDeEdad = edadesF.find(function (edad) {
    return edad >= 18;
});
console.log(mayorDeEdad);

let numerosfd = [3, 7, 5, 8, 11, 14];
let primerPar = numerosfd.find(num => num % 2 === 0);
console.log(primerPar);

// callback que busca propiedad, find
let personas = [
    {nombre: "Ana", edad: 20},
    {nombre: "Luis", edad: 15},
    {nombre: "Carlos", edad: 18},
    {nombre: "Marta", edad: 21},
];
let personaMayorDeEdad = personas.find(persona => persona.edad >= 18);
console.log(personaMayorDeEdad);









