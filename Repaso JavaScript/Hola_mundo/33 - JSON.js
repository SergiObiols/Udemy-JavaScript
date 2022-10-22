'use strict'

// JSON - JavaScript Object Notation 

window.addEventListener('load', ()=> {
    
    var pelicula = {
        titulo: "300",
        year: 2007,
        pais: "EEUU"
    }

    var peliculas = [{titulo:"Fast & Furious", year: 2014,pais: "EEUU"},pelicula]
    var div_peliculas = document.querySelector("#peliculas")
    peliculas.forEach((element) => {
        var parrafo = document.createElement("p");
        parrafo.append(element.titulo + " " + element.pais + " " +element.year);
        div_peliculas.append(parrafo);
    })

});