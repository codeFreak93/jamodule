console.log('dom')

let title = document.createElement("h1")
let texto =document.createTextNode('Soy un titulo')
title.appendChild(texto)
document.getElementById('container').appendChild(title)

let parrafo = document.createElement('p')
let text = document.createTextNode('soy un parrafo')
parrafo.appendChild(text)
document.getElementById('caja2').appendChild(parrafo)

let ul = document.createElement("ul")
for(let i=1; i<=2; i++){
    
    let li = document.createElement("li")
    let a = document.createElement("a")
    let textoA = document.createTextNode(`item ${i}`)
    a.setAttribute('href','')
    a.appendChild(textoA)
    li.appendChild(a)
    ul.appendChild(li)
}

document.getElementById('caja').appendChild(ul)


//let elemento = document.getElementById('elementToSet')
let elementos = document.getElementsByClassName('parrafos')
console.log(elementos)
let secondElement = elementos[1]
secondElement.classList.add('active')
secondElement.classList.remove('parrado2')
console.log(secondElement.classList)
//elemto.setAttribute('class','myClass');

let bytag = document.getElementsByTagName('section')
console.log(bytag)

bytag[0].classList.add('section__parrafo')

//querySelector
let  queryselec = document.querySelectorAll('.secciones')
console.log(queryselec)
//tarea
document.getElementById('caja2').innerHTML=`
    <ul>
        <li>
            <a href="">item 1</a>
        </li>
        <li>
            <a href="">item 1</a>
        </li>
    </ul>
`


const addELements = (selector, numberELements, arrayNames)=>{
    let totalElements = numberELements>=arrayNames.length?arrayNames.length:numberELements

    let elements = ""

    for(i=0; i<totalElements; i++){
        elements+=`
        <li>
            <a href="">Koder ${i+1}: ${arrayNames[i]}</a>
        </li>
        `
    }

    document.querySelector(`${selector}`).innerHTML =elements
    
}
const koders =['ale', 'oscar', 'ruben', 'brian'];

addELements('.lista', 25, koders)


const filterELements = letra =>{
    let filtrados = koders.filter((koder)=>{
        return koder.toLocaleLowerCase().startsWith(letra.toLocaleLowerCase())
    })

    console.log(filtrados)

    addELements('.lista',filtrados.length, filtrados)
}

//onchange()
//document.getELementById('orden').value

//funcion
//metodo cualquiera
//innerHTML
//lo tiene que disparar el selector