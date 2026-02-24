

// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(() => {

//         console.log("Doing Asynchrounous Tasks")

//         resolve()

//     }, 2000);
// }).then(function () {
//     console.log("Promise Executed")
// })

const promiseOne = new Promise(function(resolve , reject){
    setTimeout(()=>{
        console.log("Doing Asynchrounous Operations")
        resolve({Username: "Ramesh",id:11})
    },3000)
}).then((item)=>{
console.log(item)
console.log(item.Username)
console.log(item.id)
return item.Username
}).then((name)=>{
    console.log(name)
})