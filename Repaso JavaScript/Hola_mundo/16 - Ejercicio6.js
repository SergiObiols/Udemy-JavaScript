'use strict'

/*

Programa para indicar si un numero es par o no.
1. Ventana prompt.
2. Comprovación de numero correcto.
3. Comprovación paridad.

*/

var numero;

numero = parseInt(prompt("Indica el número para saber si es par o no",0));

while (isNaN(numero)){
    alert("Recuerda introducir un número válido!");
    numero = parseInt(prompt("Indica el número para saber si es par o no",0));
}

if (numero%2==0){
    alert("El número introducido es un número par.");
} 
else {
    alert("El número introducido es un número impar.");
}