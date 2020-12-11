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
