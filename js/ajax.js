const getUsers= (selector, arrData)=>{
    let usersHtml =''
    for( item in arrData){
        usersHtml += `<li>Name: ${arrData[item].name} LastName: ${arrData[item].lastname}</li>`
    }

    $(selector).html(usersHtml)
}

const postUser = ()=>{
    console.log($('#lastname').value)
    

    $.ajax({
        url:"https://koders1gpython-default-rtdb.firebaseio.com/juandedios/users/.json",
        method:'POST',
        data:JSON.stringify(data)//jquery ya lo manda como JSON
    }).done(function(users){
        console.log('todo ok')
        console.log(users);
        //window.open('/ajax.html','_self')
    }).fail(function(err){
        console.log('todo mal')
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
    }).always(function(){
        console.log('siempre')
    })   
    
}

$(function(){
    $.ajax({
        url:"https://koders1gpython-default-rtdb.firebaseio.com/juandedios/users/.json",
        method:'GET',
        data:{
            id:2
        }   //jquery ya lo manda como JSON
    }).done(function(users){
        console.log('todo ok')
        console.log(users);
        getUsers('.users', users);
    }).fail(function(err){
        console.log('todo mal')
        console.log(err)
        console.log(err.status)
        console.log(err.statusText)
    }).always(function(){
        console.log('siempre')
    })   
})


if(window.location.pathname ==='/newuser.html'){

    $('.post_user').on("click", postUser)
}


