'use strict'

window.addEventListener('load',() => {

    // Timers
    function interval(){
        var tiempo = setInterval(() => {
            var heading = document.querySelector("#heading");
            if (heading.style.color=="blue"){
                heading.style.color="red";
            }
            else {
                heading.style.color="blue";
            }
        },250);
        return tiempo;
    }
    
    var tiempo = interval(); 
    
    setTimeout(()=>{
        document.querySelector("#heading").style.fontSize="30px";

    },5000);

    var button = document.querySelector("#stop");
    button.addEventListener('click',()=>{
        alert("Has parado los colores")
        clearInterval(tiempo);
    })

    var button2 = document.querySelector("#resume");
    button2.addEventListener('click',()=>{
        alert("Has reiniciado los colores")
        interval();

    })
});