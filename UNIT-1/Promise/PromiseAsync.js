// const promiseOne = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         let error = false;
//         if(!resolve){
//             resolve({userName : "Rames" , pass : 123})
//         }
//         else{
//             reject("Something went wrong")
//         }
//     },2000)
// })

// async function consumepromiseOne(){
// try{
//     const response = await promiseOne
//     console.log(response)}
//     catch(error){
//         console.log(error)
//     }
// }
// consumepromiseOne()
// console.log("Hello rajat")



// Create a Promise
const myPromise = new Promise((resolve, reject) => {

    let condition = true;  // Change to false to test rejection

    setTimeout(() => {

        if (condition) {
            resolve("✅ Success: Operation completed after 2 seconds!");
        } else {
            reject("❌ Error: Condition failed!");
        }

    }, 2000);  // 2 seconds delay

});


// Consume the Promise
myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });