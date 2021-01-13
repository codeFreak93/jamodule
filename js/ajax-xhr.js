// Asynchronous JavaScript And XML
// JSON
// XML

// GET 
const getData = (url, funcionALlamar, selector, method = 'GET') => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                
                funcionALlamar(selector, objectResponse)

            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open(method,url)
    request.send()
}

const printUsers = (selector, arrData) => {
    console.log(arrData)
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.name} ${user.phone} <a href="/duser.html?id=${user.id}">Ver usuario</a></li>`
    });
    document.querySelector(selector).innerHTML = listData
}

const printPosts = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.id}. ${user.title} ${user.body} </li>`
    });
    document.querySelector(selector).innerHTML = listData
}


// nuevo usuario
const urlDb ='https://koders1gpython-default-rtdb.firebaseio.com/jorge/'
let newUser ={
    id:1,
    lastname:'Camarillo',
    name:'Jorge',
    uslPhoto:''
}

// Create user
const createUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    xhttp.send(
        JSON.stringify({
            id: 1,
            name: "Jorge",
            lastname: "Camarillo",
            urlPhoto: "https://loremflickr.com/320/240/person"
        })
    )
}
// Read user
const    readUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}
// Update and replace
const updateAndReplaceUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        id: 1,
        name: "Jorge",
        lastname: "Camarillo",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}
// Update and modify 
const updateAndModifyUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}
// Delete 
const deleteUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/${idUser}.json`)
    xhttp.send()
}

const requestAjax  = (url,callback, method='GET', json={} )=>{
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }

    xhttp.open(method, url)

    if(method !=='GET' && method !=='DELETE'){
       
        xhttp.send(JSON.stringify(json))
    }else{
        xhttp.send()
    }   
    
}

const showREsponse =(response)=>{
    console.log(response)
}
document.getElementById('getusers').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/users', printUsers, '.list__users')
})

document.getElementById('getposts').addEventListener('click', function(){
    getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
})



