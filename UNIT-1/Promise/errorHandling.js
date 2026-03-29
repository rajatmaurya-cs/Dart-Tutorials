const promiseOne =new Promise(function(resolve , reject){
    let error = true ;
    if(!error){
        resolve({username : "Rajat" , id : 459})
    }
    else{
        reject ("some thing went wrong")
    }
}).then((item)=>{
console.log(item)
return item.username
}).then((username)=>{
console.log(username)
}).catch((error)=>{
    console.log(error)
})
