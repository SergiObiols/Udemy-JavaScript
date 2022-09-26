'use strict'

/*

Calculadora:
- Introducir 2 números por pantalla.
- Si hay un número malo que nos los vuelva a pedir los 2.
- Mostrar en el body, una alerta y en console.log
el resultado de sumar, restar, multiplicar y dividir los 
dos numeros.

*/

var numero1, numero2;

numero1=parseInt(prompt("Introduce el primer numero",0));
numero2=parseInt(prompt("Introduce el segundo número",0));

while (isNaN(numero1) || isNaN(numero2)){
    alert("Recuerda que tienes que introducir un número valido!");
    numero1=parseInt(prompt("Introduce el primer numero",0));
    numero2=parseInt(prompt("Introduce el segundo número",0));
}

document.write("El resultado de la suma es: "+(numero1+numero2)+"<br/>");
document.write("El resultado de la resta es: "+(numero1-numero2+"<br/>"));
document.write("El resultado de la multiplicación es: "+(numero1*numero2+"<br/>"));
document.write("El resultado de la divisón es: "+(numero1/numero2+"<br/>"));

alert("El resultado de la suma es: "+(numero1+numero2));
alert("El resultado de la resta es: "+(numero1-numero2));
alert("El resultado de la multiplicación es: "+(numero1*numero2));
alert("El resultado de la división es: "+(numero1/numero2));

console.log("El resultado de la suma es: "+(numero1+numero2));
console.log("El resultado de la resta es: "+(numero1-numero2));
console.log("El resultado de la multiplicación es: "+(numero1*numero2));
console.log("El resultado de la división es: "+(numero1/numero2));


