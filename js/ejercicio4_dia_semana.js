// Exercise 4
// pedir al usuario un numero entre 1 y 7 
// imprimir en consola el dia de la semana equivalente
// es decir:
// 1 -> lunes, 2 -> martes, etc.

let numero =parseInt( prompt('Introduce un numero entre 1 y 7'))

switch (numero) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
    case 3:
        console.log('Miercoles');
        break;
    case 4:
        console.log('Jueves');
        break;
    case 5:
        console.log('Viernes');
        break;
    case 6:
        console.log('Sabado');
        break;
    case 7:
        console.log('Domingo');
        break;
    default:
        console.log('Introduce un numer de día de la semana valido entre 1 y 7');
        break;
}