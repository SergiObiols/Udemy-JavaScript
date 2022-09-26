'use strict'

/*

Muestra todos los divisores de un número introducido
por el usuario.

*/

var numero1, iterador;

numero1=parseInt(prompt("Introduce el primer número",0));

while (isNaN(numero1)){
    alert("Recuerda que tienes que introducir un número");
    numero1=parseInt(prompt("Introduce el primer número",0));
}

document.write("<h2> Divisores del número "+ numero1 +".</h2>")

for (iterador=1;iterador<=numero1;iterador++){
    if (numero1%iterador==0){
        document.write("El número "+iterador+" es divisor de "+numero1+". <br/>")
    }
}