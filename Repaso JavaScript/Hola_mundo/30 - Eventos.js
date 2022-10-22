'use strict'

// Eventos del mouse

var event = window.addEventListener('load', () => {
    var button = document.querySelector("#button");

    button.addEventListener('dblclick',() => {cambiarColor2();});
    button.addEventListener('mouseover',() =>{
        cambiarColor();
        this.style.border = "10px solid black";
    });
    button.addEventListener('mouseout',() =>{cambiarColor3();});


    function cambiarColor(){
        var bg = button.style.background;
        if (bg =="green"){
            button.style.background="red";
            button.style.padding="10px";
            button.style.color="white";
        }
        else {
            button.style.background="green";
            button.style.padding="10px";
            button.style.color="white";
        }
    }

    function cambiarColor2(){
        button.style.color = "black";
    }

    function cambiarColor3(){
        button.style.background="Yellow";
    }
    console.log(button);

    // Focus

    var input = document.querySelector("#name");
    input.addEventListener('focus',() => {
        console.log("Evento focus: Estas dentro del input");
    });

    // Blur

    input.addEventListener('blur',() => {
        console.log("Evento blur: Estas fuera del input");
    });

    // Keydown

    input.addEventListener('keydown',(event) => {
        console.log("Evento keydown: Pulsando la tecla:", String.fromCharCode(event.keyCode));
    });

    // Keypress

    input.addEventListener('keypress',(event) => {
        console.log("Evento keypress:  Tecla pulsada:", String.fromCharCode(event.keyCode));
    });

    // Keyup

    input.addEventListener('keyup',(event) => {
        console.log("Evento keyup: Tecla Soltada:", String.fromCharCode(event.keyCode));
    });
    console.log("Loaded");
});

    
