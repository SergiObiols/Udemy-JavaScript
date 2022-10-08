'use strict'

/*

Programa que pida 2 numeros y que nos diga cual es el mayor
el menor y si son iguales.

PLUS: si los numeros no son un numero o son menores o iguales
a 0, los pida de nuevo.

*/
 var numero1, numero2;


while(typeof(numero1)!="number" || numero1 <= 0 || typeof(numero2)!="number" || numero2 <= 0 ) {
    numero1=parseInt(prompt("Introduce el primer numero",0));
    numero2=parseInt(prompt("Introduce el segundo numero",0));
}
console.log(numero1,numero2);

if (numero1 > numero2) {
    alert("El numero: "+numero1+" es mayor que el numero: "+numero2+".");
    alert("El primer numero introducido es mayor que el segundo");
} else if (numero1 < numero2){
    alert("El numero: "+numero2+" es mayor que el numero: "+numero1+".");
    alert("El primer numero introducido es menor que el segundo");
} else {
    alert("Los dos numeros introducidos son el mismo.");
}