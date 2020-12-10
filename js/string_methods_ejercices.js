/** 
 * ejercicio 1
    1. Asignar un string a una variable 
    2. Verificar cuantos caracteres tiene ese string
    3. Imprimirlo en consola
*/

let str ='PALABRA';
console.log(`la palabra "${str}" tiene  ${str.length} caracteres`);

/**
 * Ejercicio 2
 * Declarar 2 variables con strings y concatenarlos
 */

 let str1 ='variable1';
 let str2 = 'variable2';

console.log(str1.concat(' ',str2));


/**
 * Ejercicio 3
 * Declarar un string de al menos 10 caracteres
 * imprimir en consola del 4 al 6 caracter
 */

 const CARACTER = 'EJERCICIO TRES';
 console.log(CARACTER.slice(3,6))


/**
 * Ejercicio 4
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 */

 const PALABRAS = 'UNO DOS TRES CUATRO';
 console.log(PALABRAS.replaceAll(' ', '-'))


 /**
 * Ejercicio 5
 * Declarar un string de al menos 2 palabras
 * imprimir en consola el string con cada una de las palabras Capitalizadas
 * "hola koders"
 * "Hola Koders"
 */

const PALABRASEJ5 = 'uno dos';
const ARREGLO = PALABRASEJ5.split(' ');
let arregloCapitalizado= [];
ARREGLO.forEach(palabra => {
    arregloCapitalizado.push(palabra.charAt(0).toUpperCase() + palabra.slice(1))
});

console.log(arregloCapitalizado.join().replaceAll(',', ' '))