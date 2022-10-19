'use strict'

// BOM - Browser Object Mode

console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.height);
console.log(screen.width);

function redirect(url){
    window.location.href = url;
}

function openWindow(url){
    window.open(url,"");
}

console.log(window.location);