const loadUser = (user)=>{
    console.log(user)
    if(user){
        const card = `
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text">${user.company.catchPhrase}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">UserName: ${user.username}</li>
              <li class="list-group-item">Email: ${user.email}</li>
              <li class="list-group-item">Street: ${user.address.street}</li>
              <li class="list-group-item">Suite: ${user.address.suite}</li>
              <li class="list-group-item">City: ${user.address.city}</li>
              <li class="list-group-item">Zipcode: ${user.address.zipcode}</li>
            </ul>
            <div class="card-body">
             Website: <a href="#" class="card-link">${user.website}</a>
            </div>
        </div>`
        document.getElementById('cardcol').innerHTML=card
    }else{
        const card = `
   
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">El usuario no existe</h5>
        </div>`
        document.getElementById('cardcol').innerHTML=card
    }
   
}


const searchUser = ()=>{
    let url = new URLSearchParams(location.search)
    let uId = url.get('id');
    const urlsearch =`https://jsonplaceholder.typicode.com/users/?id=${uId}`
    
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                const objectResponse = JSON.parse(response.responseText)
                
                loadUser(objectResponse[0])

            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    
    })
    request.open('GET',urlsearch)
    request.send()
}


window.addEventListener('load', searchUser)
    