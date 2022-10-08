'use strict'

/*

Programa que haga las siguientes acciones:

1. Pedir 6 números y introducirlos en un array.
2. Mostrar todos los elementos del array en la página y la consola.
3. Sacar el array ordenado y mostrarlo
4. Invertir el orden del array y mostrarlo.
5. Mostrar el número de elementos del array.
6. Buscar un valor introducido por el usuario, y nos diga si esta y su posicion.


*/

var numeros = [];
var iterador=0;

function mostrarArray(element, customText=""){
    document.write("<h1> Array de números: "+ customText + "</h1>");
    if (customText != "Ejercicio 5") {
        document.write("<ul>");
        element.forEach(numero => {
            document.write("<li>"+ numero +"</li>")
            console.log(numero);
        });
        document.write("</ul>");
    }
    else {
        document.write("El array tiene " + element.length + " elementos.");
        console.log(element.length);
    }
}

// 1 

do{
    numeros.push(parseInt(prompt("Introduce un número",0)));
    iterador++;
}while (iterador < 6)

mostrarArray(numeros)

// 2
mostrarArray(numeros,"Ejercicio 2")

// 3 
mostrarArray(numeros.sort((a,b) => (a-b)), "Ejercicio 3");

// 4
mostrarArray(numeros.reverse(), "Ejercicio 4");

// 5 
mostrarArray(numeros, "Ejercicio 5");

// 6 

var busqueda = parseInt(prompt("Introduce el número a buscar",0));

if (numeros.findIndex(numero => numero == busqueda)==-1){
    console.log("Numero no encontrado");
}
else {
    console.log("EL numero indicado se encuentra en la posicion",numeros.findIndex(numero => numero == busqueda)+1);
}
