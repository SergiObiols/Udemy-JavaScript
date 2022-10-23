'use strict'

// Local Storage

window.addEventListener('load',()=> {

    // Compravación de LocalStorage del navegador.

    if(typeof(Storage) != 'undefined'){
        console.log("Soy compatible con LocalStorage.")
    }
    else {
        console.log("No soy compatible con LocalStorage.");
    }

    // Guardar datos

    localStorage.setItem("title","Curso de Javascript");

    // Recuperar datos

    localStorage.getItem("title");
    document.querySelector("#pelicuulas").innerHTML=localStorage.getItem("title");

    // Guardar objetos

    var usuario = {
        nombre: "Sergi Obiols Lleixà",
        mail: "sobiolslleixa@gmail.com",
        age: 28
    };

    localStorage.setItem("usuario",JSON.stringify(usuario));

    // Recuperar objeto
    var userJS = JSON.parse(localStorage.getItem("usuario"));
    console.log(userJS);
    document.querySelector("#pelicuulas").innerHTML = " - " + userJS.nombre

    // Eliminacion de datos - 1 dato en concreto

    localStorage.removeItem("title");

    // Eliminacion de datos - todo LocalStorage
    localStorage.clear();

});