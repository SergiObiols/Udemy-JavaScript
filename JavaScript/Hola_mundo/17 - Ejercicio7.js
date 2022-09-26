'use strict'

/*

Tabla de multiplicar de un número introducido por pantalla.

*/

var numero, iterador;

numero=parseInt(prompt("Introduce un número para calcular su tabla de multiplicar",0));

while(isNaN(numero)){
    alert("Recuerda que tienes que introducir un número!");
    numero=parseInt(prompt("Introduce un número para calcular su tabla de multiplicar",0));
}

for (iterador=0;iterador<=10;iterador++){
    console.log(numero+"*"+iterador+" = "+(numero*iterador));
}