'use strict'

// While

var year = 2022;

while (year >= 1993){
    console.log("Vamos por el año: "+year)
    year--;
    if (year == 2000){
        break;
    }
}

// Do while

var years = 25;

do{
    alert("hola");
    years--;
}while(years < 20)