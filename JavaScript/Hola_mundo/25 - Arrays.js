'use strict'

// Arrays

var iterador;
var nombre = "Sergi Obiols Lleixà"; 
var nombres = ['Sergi','Obiols','Lleixà',28];

var lenguajes = new Array('Javascript','Java','Python','C++','Scala');

console.log(nombres[1]);
console.log(lenguajes[0]);

console.log(nombres.length)

/*
var elemento = parseInt(prompt("¿Que elemento del array quieres?",0));
if (elemento>=nombres.length){
    alert("Has introducido un indice demasiado grande!")
}
else {
    alert(nombres[elemento]);
} 
*/

document.write("<h1> Lenguajes de programacion 2022: </h1>");
document.write("<ol>");

/*
for (iterador=0;iterador<lenguajes.length;iterador++){
    document.write("<li> "+ lenguajes[iterador] +" </li>")
}*/

lenguajes.forEach((elemento)=>{
    document.write("<li> "+ elemento +" </li>")
})

for(var lenguaje in lenguajes){
    document.write("<li> "+ lenguajes[lenguaje] +" </li>")
}

document.write("</ol>");

var find = lenguajes.findIndex(lenguaje => lenguaje == 'PHP');
var find2 = lenguajes.find(lenguaje => lenguaje == 'PHP');

console.log(find,find2);

var precios = [2.43,6.23,9.99];
var busqueda = precios.some(precio => precio > 20);
console.log(busqueda);