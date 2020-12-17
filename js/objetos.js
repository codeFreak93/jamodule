/* let obj ={
    key:value,
} */


let person = {
    nombre: 'nayeli',
    iskoder: true,
    age:20,
    location: {
        street: 'lorem',
        cp:'55778'
    },
    pets:['puppy','scooby']
}

console.log(person['age'])
console.log(person.age)
console.log(person.pets[1])

let persona2 = new Object();
persona2.location ={
    cp:'123'
}

console.log(persona2)

//mi nombre es nayeli y vivo en la calle xxx con el CP 123

console.log(`Mi nombre es ${person.nombre} y vivo en la calle ${person.location.street} con el CP ${person.location.cp}`)

for (item in person){
    
    if(item === 'location'){
        for(iteml in person[item]){
            console.log(iteml)
        }
    }
}

delete person.location.street
console.log(person)

let persons = [
    {
        nombre: 'nayeli',
        iskoder: true,
        average:10,
        age:20,
        location: {
            street: 'lorem',
            cp:'55778'
        },
        credential:{
            key1:'55778',
            key2:'asdasd'
        }
    },
    {
        nombre: 'nayeli',
        iskoder: true,
        average:9,
        age:20,
        location: {
            street: 'lorem',
            cp:'55778'
        },
        credential:{
            key1:'55778',
            key2:'asdasd'
        }
    }
]


/* persons.forEach((element)=>{
 console.log(element.average)
}) */

let suma = persons.reduce((acc, cv)=>{
    return acc +cv.average
},0)/persons.length

console.log(suma)

persons.filter((cv)=>{
    return cv.average > 9
})

persons.filter((cv)=>{
    if(cv.location){
        return cv
    }
})

// Ejercicio 1
// dado el siguiente array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

let users2 =  users.reduce((obj, item) => (obj[item.firstName] = item.role, obj) ,{});
console.log(users2)


//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

const usersByRole = (arrayUsers, rol)=> arrayUsers.filter(({role}) => role === rol)
console.log(usersByRole(users,'Instructor'))

//ejercicio 3
// tomando el siguiente array de objetos
let personst = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
// obtener lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

const cantidad = personst.reduce((acum,actual)=> actual.voted === true ? acum+1 : acum+0,0)
const edadPromedio = personst.reduce((acum,actual)=> acum+actual.age,0)/personst.length
console.log(`Cantidad de personas que votaron ${cantidad} Edad promedio ${edadPromedio}`)
