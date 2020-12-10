// Exercise 2
// pedir al usuario por prompt un numero entre 1 y 100
// comparar si ese numero es divisible entre 2 y 11 e imprimir en consola un mensaje indicandolo
// sino, enviar un mensaje negandolo

let numero = prompt('Introduce un numero entre 1 y 100')

if(numero%2 ===0 && numero%11===0){
    console.log(`El numero ${numero} es divisible entre 2 y 11`);
}else{
    console.log(`El numero ${numero} no es divisible entre 2 y 11`)
}