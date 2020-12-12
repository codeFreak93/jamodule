console.log('Hola koders')
// ejercicio Escribir una funcion que apartir del string "12967"
// imprimir las tablas de multiplicar en ese orden

function imprimirTablasEnOrden(secuencia){
    for(let i =0; i<secuencia.length; i++){
        for(let j = 1; j<=10; j++){
            console.log(`${secuencia[i]} x ${j} = ${secuencia[i]*j}`);
        }
    }
}


imprimirTablasEnOrden('123489');


//Ejercicio imprimir si el texto introducido es un palindromo
function esPalindromo(texto){
    let arrayText = [];
    for(let i=texto.length-1; i>=0; i-- ){
        arrayText.push(texto[i]);
    }

    const COMPARA_TEXTO = arrayText.join(' ');
    if(COMPARA_TEXTO.replaceAll(/ /g,'') === texto.replaceAll(/ /g,'')){
        
        console.log(`${texto} Es un palindromo`)
    }else{
        console.log(`${texto} No es un palindromo`)
        
    }
}

esPalindromo('anita lava la tina')


//Escribir una funcion que dados 2 parametros imprima el tipo de dato de cada uno;

function tipos(a,b){
    console.log(`${typeof(a)} , ${typeof(b)}`)
}

tipos('a', 1);