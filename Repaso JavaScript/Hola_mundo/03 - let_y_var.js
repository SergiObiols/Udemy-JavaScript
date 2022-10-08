'use strict'

// test let y var

//test con var
var numero=40;
console.log(numero);
if (true){
    var numero=50;
    console.log(numero);
}
console.log(numero);

//test con let
var numero2=20;
console.log(numero2);
if (true){
    let numero2=50;
    console.log(numero2);
}
console.log(numero2);