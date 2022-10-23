'use strict'

// Formulario

window.addEventListener('load', ()=>{
    var formulario = document.querySelector("#formulariopeliculas");
    var lista = document.querySelector("#listapeliculas")
    var formulario2 = document.querySelector("#formulariopeliculas2");

    formulario.addEventListener('submit', () =>{
        if (document.querySelector("#addpelicula").value != "") {
            localStorage.setItem(document.querySelector("#addpelicula").value,document.querySelector("#addpelicula").value)
        }
    });

    for (var i in localStorage){
        if (typeof localStorage[i] == "string"){
            var li = document.createElement("li");
            li.append(localStorage[i]);
            lista.append(li);              
        }
    }

    formulario2.addEventListener('submit', () =>{
        if (document.querySelector("#removepelicula").value != "") {
            localStorage.removeItem(document.querySelector("#removepelicula").value);
        }
    });

});