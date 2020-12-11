function getName(){
    //sentencias
    const name = prompt('Cual es tu nombte?');
    console.log(name)
}

function nameReverse(name){
    console.log(name)
    
}


//imprimir la tabla al revez
function imprimeTabla(numero){
    for(let i=10; i>0; i--){
        console.log(`${numero} x ${i} = ${numero*i}`);
    }
}

imprimeTabla(10);


/** 
 * ejercicio 
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/

function contarCaracteres(palabra){
    console.log(`la palabra "${palabra}" tiene  ${palabra.length} caracteres`);
}
contarCaracteres('palabra');

/**
 * Ejercicio
 * Declarar 2 variables con strings y concatenarlos
 */

 function conCatenar(string1, string2){
    console.log(string1.concat(' ',string2));
 }

 conCatenar('Juan', 'Hernández');