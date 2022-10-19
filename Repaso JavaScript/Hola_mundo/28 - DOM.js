'use strict'

//DOM - Document Object Model


// Obtención de elementos con un ID único.


var caja = document.getElementById("caja");
var caja2 = document.querySelector("#caja");

function cambiarColor(color){
    caja.style.background = color;
}

caja.innerHTML = "Esto no funciona";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white";
caja.className = "hola";
console.log(caja)

caja2.innerHTML="Esto no funciona 2"
caja2.style.background="green";
caja2.style.padding="40px";
caja2.style.color="black";
console.log(caja2)

// Obtención de elementos mediante sus etiqueteas.

var seccion = document.getElementById("miseccion");

var hr = document.createElement("hr")
var hr2 = document.createElement("hr")
seccion.append(hr);
var parrafo, texto;
var todoslosDiv = document.getElementsByTagName("div");
console.log(todoslosDiv.length);
Array.from(todoslosDiv).forEach(element => {
    if (element.innerHTML.length > 1){
        parrafo=document.createElement("p");
        texto=document.createTextNode(element.textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
});
seccion.append(hr2);
console.log(todoslosDiv);

// Obtención de elementos mediante su clase.

var divred = document.getElementsByClassName("red")
Array.from(divred).forEach(element => {
    element.style.background="red"
    element.style.color="black"
})
console.log(divred);
var divyellow = document.getElementsByClassName("yellow")
Array.from(divyellow).forEach(element => {
    element.style.background="yellow"
    element.style.color="black"
})
console.log(divyellow);
var divorange = document.getElementsByClassName("orange")
Array.from(divorange).forEach(element => {
    element.style.background="orange"
    element.style.color="black"
})
console.log(divorange);

var test = document.querySelectorAll("div");
console.log(test.length);