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

console.log(arregloCapitalizado.join(' '))

/**
 * Ejercicio 6
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
 * "*****@kodemia.mx"
 */

 const usuario = 'jorgec@kodemia.mx';
 const usuarioIndex = usuario.indexOf('@');
 console.log(`*****${usuario.slice(6)}`)

/*Ejercicio 8
Declarar un string de al menos 2 palabras
convertir ese string en un array
"Hola koders"
["hola", "koders"]*/
let str8 = "Hola koders";
let res = str8.split(' ')
console.log(res)

for (let i = 1; i <=10; i++) {
    console.log(i);
}


/*Imprimir en consola la tabla del 7
7 x 1 = 7*/
const tabla = 7;
for(let i=1; i<=10 ; i++){
    console.log(`${tabla} x ${i} = ${tabla*i}`);
}

/*imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
3,6,7,9,12,14,15....*/

for(let i=1; i<=100; i++){
    if(i%3===0  || i%7===0){
        console.log(i);
    }
}

/*imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
“en un lugar de la mancha” -> 5*/
const cadena = 'en un lugar de la mancha';
const arregloMatches = cadena.match(/ /g);
console.log(`${cadena} -> ${arregloMatches.length}`);

/*imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4*/
const cadenaVocals = 'Hola mundo';
const vocales = 'aeiouAEIOU';
let cantidadVocales =0;
for(i=0; i<=cadenaVocals.length; i++){
    if(vocales.includes(cadenaVocals[i])){
        cantidadVocales++
    }
}

console.log(cantidadVocales);