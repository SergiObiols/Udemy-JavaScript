'use strict'

var numero=34523;
var texto="¿Hola como estas amigo mio?";
var texto2="Estoy bien."

// Tratamiento

console.log(numero);
console.log(numero.toString());
console.log(texto.toUpperCase(texto));
console.log(texto.toLowerCase(texto));
console.log(texto.length);
console.log(texto+"\n"+texto2);
console.log(texto.concat("\nEstoy bien."));

// Búsquedas 

console.log(texto.indexOf("o"));
console.log(texto.lastIndexOf("o"));
console.log(texto.indexOf("x"));
console.log(texto.match(/como/g));
console.log(texto.substring(6,10));
console.log(texto.charAt(13));
console.log(texto.startsWith("¿H"));
console.log(texto.endsWith("o?"));
console.log(texto.includes("como"));

// Reemplazo, partir y eliminar gaps 

console.log(texto.replace("como","Como"));
console.log(texto.slice(12,14));
console.log(texto.split(" "));
console.log(texto.trim());