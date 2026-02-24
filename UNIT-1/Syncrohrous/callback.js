
//✅ callback ->.  A function that is passed into another function and executed later.

// function greet(name , callback1 , callback2){
//     console.log("Hello",name)
//     callback1()
//     callback2()

// }

// function sayBye(){
//     console.log("Bye Bye")
// }


// function sayHello (){
//     console.log("Hello Modi Ji")
// }

// greet("Shyam" , sayBye , sayHello)




function checkLogin(callback){
    setTimeout(()=>{
        console.log("User logged in to the application")
        callback()
    },3000)
}

function verifyCart(callback){
    setTimeout(()=>{
        console.log("User verified cart")
        callback()
    },3000)
}

function proceedToPayments(callback){
    setTimeout(()=>{
        console.log("Payment done")
        callback()
    },3000)
}

function placeOrder(callback){
    setTimeout(()=>{
        console.log("Order placed")
        callback()
    },3000)
}

checkLogin(()=>{
    verifyCart(()=>{
        proceedToPayments(()=>{
            placeOrder(()=>{
                console.log("All tasks done")
            })
        })
    })
})
