// Exercise 5
// pedir al usuario un numero entre 1 y 12
// Imprimir en consola el numero de días que corresponden a ese mes
// p.ej.
// 5 -> 31 días

let numero = parseInt(prompt('Introduce un numero entre 1 y 12'))

let anio = new Date().getFullYear();

console.log( `${new Date(numero-1, anio,0).getDate()} días`);