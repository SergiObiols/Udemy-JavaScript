'use strict'

// Función sin nombre 

var pelicula = function(nombre){
    return("La pelicula es: ",nombre);
}

// Call-back 

function sumame(numero1,numero2, sumaYmuestra, sumaPorDos){
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);
}

sumame(2,4,dato => {
    console.log("La suma es: ",dato);
},dato => {
    console.log("La suma por dos es: ",(dato*2))
});

