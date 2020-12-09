console.log('readyo')
//if ternario

// expresion ? sies true : si es false
//comparar si el primer numero es mayor que el segundo
//imprimir el primero
//si no
//imprimir el segundo

const NUMBER_ONE = parseInt(prompt('¿Dame un numero?'));
const NUMBER_TWO = parseInt(prompt('¿Dame otro numero?'));

NUMBER_ONE > NUMBER_TWO ?
    console.log(`el numero mayor es ${NUMBER_ONE}`)
    :
    console.log(`el numero ${NUMBER_ONE} es igual al numero ${NUMBER_TWO}`)