'use strict'

// Arrays multidimensiones

var categorias = ['Accion', 'Terror','Comedia'];
var peliculas = ['Fast & Furious', 'Apocalypto','300'];

var cine = [categorias,peliculas];

console.log(cine[0][0]);
console.log(cine[1][0]);

var elemento;

do  {
    elemento = prompt("Introduce un titulo de pelicula");
    peliculas.push(elemento);
} while (elemento != "")

var index = peliculas.indexOf('300');
if (index > -1) {
    peliculas.splice(index,1);
}

var string = peliculas.join();
console.log(string);

var cadena = 'texto 1, texto 2, texto 3';
var cadena_array = cadena.split(", ");

console.log(cadena_array);
console.log(index);
console.log(peliculas)
console.log(peliculas.sort());
console.log(peliculas.reverse());