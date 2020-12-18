//accesors
let obj = {
    name:'ruben',
    lastname:'flores',
    age:29,
    assigments:[
        {
            na:'español',
            ave:90
        },
        {
            na:'matematicas',
            ave:90
        }
    ],
    getAverage: function(){
        let assigments = this.assigments
        let total = assigments.reduce((acc,cv)=>acc +cv.ave,0)/assigments.length
        return total;
    },
    get fullname (){
        return this.name + ' ' + this.lastname
    },
    saltar: function(){
        return `${this.name} esta saltando`
    },
    getYearsOld: function(){
        return `${this.age} años`
    }
}

console.log(obj.fullname)
console.log(obj.saltar())
console.log(obj.getAverage())

let koder = {
    email:'juand_10193@hotmai.com',
    name: 'Juan',
    lastName:'Hernandez',
    edad:27,
    nickname:'jd',
    gender:'M',
    birthday:'10/01/1993',
    bootcamp:'python',
    generation: '1',
    weight:81,
    height:1.77,
    moduls:[
        {
            na:'Maquetado',
            ave:90
        },
        {
            na:'JS',
            ave:90
        }
    ],
    get FullName(){
        return `${this.name} ${this.lastName}`
    },
    get saludar(){
        return `Hola soy ${this.getFullName} tengo ${this.edad} años y estoy en la generacion ${this.generation}`
    },
    get programar(){
        return `${this.FullName} esta programando`
    },
    get despedirce(){
        return `${this.FullName} se despide`
    },
    get Age(){
        let date = this.birthday.slice(this.birthday.length -4);
        return `${this.FullName} tiene ${2020 - date} años`
    },
    get Average(){
        let moduls= this.moduls
        let total = moduls.reduce((acc, cv)=>{
            return acc +cv.ave
        },0)
        return total /moduls.length
    },
    get IMC(){
        return this.weight /(this.height*this.height)
    },
    set Bootcamp(bootcamp){
        this.bootcamp = bootcamp
    },
    set NewProperty(propertys){
       const {nameProperty, valueProperty} = propertys
        this[nameProperty] = valueProperty
    }

}

console.log(koder.saludar)
console.log(koder.programar)