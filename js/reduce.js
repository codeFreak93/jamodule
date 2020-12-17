//arr.reduce(callback(acumulator,current value,[,index[,array]])[,initialValue])
const arrReduce =[1,2,3,4]
 arrReduce.reduce((acumulator, currentValue, index, arrayOriginal)=>{
    let suma = acumulator + currentValue
    console.log(acumulator, currentValue)
    return suma
},0)

arrReduce.reduce((acumulator, currentValue) => acumulator + currentValue, 0)

//['a', 'b', 'c','c','b']
// searchOcurrence(array, 'caracter')
//searchOcurrence(['a', 'b', 'c','c','b'], 'c')
//2

const searchOcurrence = (array,caracter) =>{
    
    let occurrence = array.reduce((accumulator, currentValue)=>{
        
        if(caracter === currentValue){
            return accumulator +1
        }else{
            return accumulator +0
        }

       
    },0)

    return occurrence;
}

console.log(searchOcurrence(['a', 'b', 'c','c','b'], 'c'))

//['en', 'algun', 'lugar', 'de', 'la', 'mancha']
// => 'En algun lugar de la mancha"
// .reduce

const concatPhrase = array => array.reduce((accumulator, valactual)=>{
    let frase = `${accumulator} ${valactual}`
    return frase;
})

console.log(concatPhrase(['en', 'algun', 'lugar', 'de', 'la', 'mancha']))
