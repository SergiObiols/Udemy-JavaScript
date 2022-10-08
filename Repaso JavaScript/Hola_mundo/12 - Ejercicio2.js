'use strict'

/*

Mostrar la media y la suma de los numeros introducidos
hasta que el usuario introduzca un numero negativo

*/

var suma=0, media=0.0, numeroIntroducido,i=0;

numeroIntroducido=parseInt(prompt("Introduce un numero",0));
while (isNaN(numeroIntroducido)){
    numeroIntroducido=parseInt(prompt("Introduce un numero",0));
}

do {
    i++;
    suma+=numeroIntroducido;
    media=suma/i;
    numeroIntroducido=parseInt(prompt("Introduce un numero",0));
} while(numeroIntroducido>=0)

alert("La suma de todos los numeros es: "+suma+" y la media de los numeros introducidos es: "+media+".");


