'use strict'

// Condicional if
// Si A es igual a B entonces C

var edad = 14;
var nombre = "David Suarez"

/* operadores relacionales 

Mayor:            >
Menor:            <
Mayor o igual:    >=
Menor o igual:    <=
Igual:            ==
Diferente:        !=

*/


if (edad >= 18){
    console.log(nombre+" tiene " + edad+" años, es mayor de edad")
    if (edad <= 33){
        console.log("Todavia eras milenial")
    } else if(edad >= 70){
        console.log("Eres un anciano")
    }else{
        console.log("Ya no eres milenial")
    }
}else{
    console.log(nombre+" tiene " + edad+" años, es menor de edad")
}

/* Operadores Lógicos 

AND (y): &&
OR (o): ||
NOT (negación) !

*/

//Negación

var year = 2022;
if (year != 2016){
    console.log("No estamos en 2016, realmente es: "+year)
}

// AND

if (year >= 2000 && year <= 2025 && year != 2022) {
    console.log("Estamos en la era postmoderna")
} else {
    console.log("Estamos en la era postmoderna")
}

//OR 

if(year == 2022 || year == 2012){
    console.log("El año termina en 2")
}