console.log('Hola koders')

//imprimir la tabla del 8 en reversa

for(let i=10; i>0; i--){
    console.log(`8 x ${i} = ${8*i}`);
}


// imprimir los numeros pares entre 1 y 100;
for(let i=1; i<=100; i++){
    if(i%2===0){
        console.log(i);
    }
}

// imprimir los numeros pares entre 1 y 100; con while
let counterwhile = 1;
while (counterwhile <=100) {
    if(counterwhile%2===0){
        console.log(i);
    }
}


//dado un string
//"reverse"
//invertir el orden e imprimir en consola

const palabra = 'reverse';
let arreglo =[];
for(let i = palabra.length-1; i>=0; i--){
    arreglo.push(palabra[i]);
}

console.log(arreglo.join(''));

//tabla del 7 con while
let counter =1;
while(counter <= 10){
    console.log(`7 x${counter} = ${7*counter}`);
    counter ++;
}
