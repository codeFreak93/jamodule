console.log('Hola koders')

function add(a,b){
    const c = a + b;
    return c;
    console.log('overflow');
}

const result  = add(2, 5);
//result 7


//edad del perro 
//return 7 ==> 35

/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 */

 function calculateDogAge(name, age){
     return `${name}  tiene ${age} años caninos`
 }

console.log(calculateDogAge(2))

 /**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 */

 function calcGeometryArea(radio){
     return 3.1416*(radio*radio)
 }

 console.log(calcGeometryArea(3));


 function calcGeometryCircunferencia(radio){
     return 3.1416*(radio*2)
 }

 console.log(calcGeometryCircunferencia(3))

 /**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */

function temperatureConverter(grados, medida){
    if(medida ==='C' || medida ==='c'){
        
        return `${((grados*(9/5)) + 32)}`
    }

    if(medida ==='F' || medida ==='f'){
        return `${(grados-32)*(5/9)}`
    }
}

console.log(`${temperatureConverter(32, 'c')} °C`)


/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */

function factorial (n) {
	let total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

console.log(factorial(10))