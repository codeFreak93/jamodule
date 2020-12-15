//declarar array

/* const myArray = [ "string", 2,[1,2,3]]
console.log(myArray[0])
console.log(myArray[1])
console.log(myArray[2])
console.log(myArray[2][2])

for(let i=0; i<myArray.length; i++){
    console.log(myArray[i])
}
 */


const myArray = [ 1,4,7]

for(let i=0; i<myArray.length; i++){
    for(let j=1; j<=10; j++){
        console.log(`${myArray[i]} x ${j} = ${myArray[i]*j}`)
    }
}


const arraySumNumber =[1,2,3,4];
let suma =0;
for(let count =0; count <arraySumNumber.length; count++){
    suma +=arraySumNumber[count];
}

console.log(suma);


//metodos array
/* let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();   */      // Sorts the elements of fruits


let fruits = ["Banana", "Orange", "Apple", "Mango"];
let x = fruits.push("Kiwi");   //  the value of x is 5


/*The forEach() method calls a function once for each element in an array, in order.

Note: the function is not executed for array elements without values.
*/
    

fruits.forEach(fruta => {
    console.log(fruta)
});


/*The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.

Note: map() does not execute the function for array elements without values.

Note: this method does not change the original array.*/

let mapFruits = fruits.map((val, index)=>{
    return 'banana'
})

console.log(mapFruits)


/*The filter() method creates an array filled with all array elements that pass a test (provided as a function).

Note: filter() does not execute the function for array elements without values.

Note: filter() does not change the original array.*/

let fruitsFilter = fruits.filter( (val) => val ==='Banana')
console.log(fruitsFilter);

/*The reduce() method reduces the array to a single value.

The reduce() method executes a provided function for each value of the array (from left-to-right).

The return value of the function is stored in an accumulator (result/total).

Note: reduce() does not execute the function for array elements without values.

Note: This method does not change the original array.*/