'use strict'

// Parametros REST y SPREAD


// REST 

var iterador;

function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1: ",fruta1);
    console.log("Fruta 2: ",fruta2);
    for (iterador=0;iterador<resto_de_frutas.length;iterador++){
        console.log("Fruta "+iterador+": "+resto_de_frutas[iterador]);
    }
    //console.log("Resto de frutas: ",resto_de_frutas);
}

listadoFrutas('Naranja','Manzana','Sandia','Pera','Melon','Coco');


// SPREAD

var frutas =['Naranja','Manzana'];
listadoFrutas(...frutas,'Sandia','Pera','Melon','Coco');