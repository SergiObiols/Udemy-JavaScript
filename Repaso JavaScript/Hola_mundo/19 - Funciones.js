'use strict'

// Funciones

function web(numero1, numero2){
    document.write("El resultado de la suma es: "+(numero1+numero2)+"<br/>");
    document.write("El resultado de la resta es: "+(numero1-numero2)+"<br/>");
    document.write("El resultado de la multiplicacion es: "+(numero1*numero2)+"<br/>");
    document.write("El resultado de la division es: "+(numero1/numero2)+"<br/>");
    document.write("*************** <br/>");
}

function consola(numero1, numero2){
    console.log("El resultado de la suma es: "+(numero1+numero2)+".\n");
    console.log("El resultado de la resta es: "+(numero1-numero2)+".\n");
    console.log("El resultado de la multiplicacion es: "+(numero1*numero2)+".\n");
    console.log("El resultado de la division es: "+(numero1/numero2)+".\n");
    console.log("*************** <br/>");
}

function calculadora(numero1, numero2, mostrar=false){

    if (mostrar) {
        web(numero1,numero2);
    } 
    else {
        consola(numero1,numero2);
    }

}
calculadora(2,3);
calculadora(20,43,true);