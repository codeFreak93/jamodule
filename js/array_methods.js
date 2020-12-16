const arrayCitys = ['cdmx', 'Ciudad','Monterrey', 'Guadalajara']
arrayCitys.forEach(function(currentElement, index, arrayOriginal){
    if(currentElement.startsWith('c') || currentElement.startsWith('C')){
        console.log(currentElement, index, arrayOriginal)
    }
})


//tabla de multiplicar

const tablas =[1,2,3,4];
tablas.forEach(element=>{
    for(let i =1; i<=10; i++){
        console.log(`${element} x ${i} = ${element*i}`)
    }
})


const doble = arrayNums =>{
    let arrayDoble =[];
    arrayNums.forEach(element=>{
        arrayDoble.push(element*2)
    })

    return arrayDoble;
}

console.log(doble([1,2,3]))

const paresArray = arrayNums =>{
    let pares =[]
    arrayNums.forEach(element=>{
        if(element%2 ===0){
            pares.push(element)
        }
    })

    return pares;
}

console.log(paresArray([1,2,3,4,5]))


const letrasFristLast = palabras =>{
    let letras = []
    palabras.forEach(element=>{
        letras.push(`${element[0]}${element.charAt(element.length-1)}`)
    })
    return letras;
}


console.log(letrasFristLast(['Hola', 'Mundo']))


//.map()
// currentValue, index , arrayOriginal

/* const doubleValues = arrNumbers =>{
    let array
} */

const doubleValuesMap = (arr) => {
    return arr.map(currentElement => currentElement*2)
}

const doubleValuesMap2 = (arr) => arr.map(customElements => customElements*2)

//filter reduce 2 ejercicios de cada 1