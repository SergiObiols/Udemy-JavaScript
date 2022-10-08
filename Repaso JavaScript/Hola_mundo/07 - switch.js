'use strict'

// switch

var edad = 24;
var resultado="";

switch (edad){
    case 18: 
        resultado="Acabas de cumplir la mayoria de edad";
    break;
    case 25: 
        resultado="Ya eres un adulto";
    break;
    case 40: 
        resultado="Crisis de los 40";
    break;
    case 75: 
        resultado="Eres ya un anciano";
    break;
    default: 
        resultado="Tu edad es neutra";
    break;
}

console.log(resultado);
