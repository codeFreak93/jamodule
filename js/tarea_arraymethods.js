// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]


const getHigValue = arrayNumbers =>{
    let higValue =0;
    arrayNumbers.forEach(element => {
        if(element >= higValue){
            higValue = element;
        }
    });

    return higValue;
}

console.log(getHigValue([1,2,3,4,5]))


// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']

const stringArray = arrayNums => arrayNums.map(val => val=val.toString() )
console.log(stringArray([1,2,3,4,5]))

// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]

const capitalizeStrings = arrayElements =>{
    let capitalized = arrayElements.map(val =>{
        if(typeof(val)==='string'){
            val = val[0].toUpperCase() + val.slice(1).toString()
            return val;
        }else{
            return val;
        }
    })

    return capitalized;
}

console.log(capitalizeStrings(['hola', 'mundo',1]))

// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]

const noDuplicateds = arrayElements => arrayElements.filter(element => {
    let filtro = arrayElements.filter(elemento =>elemento === element)
    if(filtro.length === 1){
        return  element;
    }

})
console.log(noDuplicateds([1,2,4,2,5,4]))

// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]


const duplicateds = arrayElements => arrayElements.filter((element,index) => {
    let filtro = arrayElements.filter(elemento =>elemento === element)
    if(filtro.length > 1 && arrayElements.indexOf(element)===index){
        return  element;
    }

})


console.log(duplicateds([1,2,4,2,5,4]))

// ejercicio 7 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]

const bisiestos = arrayElements => arrayElements.filter(element => ((element % 4 == 0 && element % 100 != 0) || element % 400 == 0))
console.log(bisiestos([1990, 2000, 2001, 2020])) 