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


