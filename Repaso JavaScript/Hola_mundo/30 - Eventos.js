'use strict'

// Eventos del mouse

var button = document.querySelector("#button");

button.addEventListener('dblclick',function(){cambiarColor2();});
button.addEventListener('mouseover',function(){cambiarColor();});
button.addEventListener('mouseout',function(){cambiarColor3();});


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
    button.style.background="Yellow"
}
console.log(button);
