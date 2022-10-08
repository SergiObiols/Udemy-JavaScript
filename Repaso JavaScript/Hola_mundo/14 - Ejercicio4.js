'use strict'

/*

Mostrar todos los numeros impares comprendidos entre dos numeros 
introducidos por el usuario.

*/

var numero1=0,numero2=0,iterador;

numero1=parseInt(prompt("Introduce el primer número",0));
numero2=parseInt(prompt("Introduce el segundo número",0));

while (isNaN(numero1) || isNaN (numero2)){
    alert("Recuerda que tienes que introducir un número");
    numero1=parseInt(prompt("Introduce el primer número",0));
    numero2=parseInt(prompt("Introduce el segundo número",0));    
}

document.write("<h3> Los numeros comprendidos entre los dos numeros que has introducido són:</h3>");

if (numero1 > numero2){
    for(iterador=numero2+1;iterador<numero1;iterador++){
        if (iterador%2!=0) {
            document.write("El número: "+iterador+" es impar. <br/>");
            //console.log(iterador);    
        }
    }
}else if(numero1 < numero2){
    for(iterador=numero1+1;iterador<numero2;iterador++){
        if (iterador%2!=0) {
            document.write("El número: "+iterador+" es impar. <br/>");
            //console.log(iterador);    
        }
    }
}else{
    console.log("Has introducido el mismo numero")
}