// Exercise 3
// pedir al usuario por prompt un numero entre 1 y 100
// verificar si es un par o impar
// imprimir en resultado en consola
let numero = prompt('Introduce un numero entre 1 y 100')

numero%2 === 0
    ?console.log(`El numero ${numero} es un numero par`)
    :console.log(`El numero ${numero} es un numero impar`)