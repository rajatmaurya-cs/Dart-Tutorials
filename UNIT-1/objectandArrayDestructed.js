

// const user = {
//     firstname : "akaksh",
//     lastname : "goel",

//     address : {
//         city : "Ghaziabad",
//         coutnry : "India"
//     }

// }
// console.log(user.address.city)

// let {firstname, lastname : ls , address : {city , coutnry}} = user // This is obj destructuring 
// console.log(firstname)
// console.log(ls)
// console.log(city)





// let number = [1,2,3,4,5]
// let [a,b,c] = number
// console.log(a,b,c)
// let number2 = ['red' , 'green' , 'black' , 'white']
// let [a2 , b2] = number2
// console.log(a2,b2)



// const student = {
//     id: "233530935",
//     name: "Rajat",
//     course: ["rect-native", "java", "saas"],

//     address: "Delhi",
//     Marks: {
//         Hindi: 67,
//         english: 78,
//         Math: 100
//     },
//     admissionStatus: "confirmed"
// }
//  const average = (a,b,c)=>{
//     const average = (student.Marks.Hindi +student. Marks.Math + student.Marks.english)/3;
//     return average
//  }

// function Dispalydata({ id, name, course, address, Marks, admissionStatus }) {
//     console.log("name of student : ", name);
//     console.log("id of student : ", id);
//     console.log("course of student : ", course);
//     console.log("The average Marsk of student ", average() )
//     console.log("address of student : ", address);
//     if(average()>=80){console.log(" Admission : Eligible for merit schollarship")}
//     else console.log("Admission : Regular Admission")
    
// }

// Dispalydata(student)


// const Greatest = (a,b,c)=>{
//     if(a > b && a > c){
//         console.log(a)
//         return 
//     }
//       if(b > a && b > c){
//         console.log(b)
//         return 
//     }
//       if(c > b && c > a){
//         console.log(c)
//         return 
//     }


// }


// Greatest(4,9,3);
// const arr = [2,4,5,6,7,8,9,10];
// let sum = 0 ;

// arr.map((i)=>{
//     if(i%2===0){
//         sum = sum + i*i
//     }
// })
// console.log(sum)

const arr = [1,2,3,4,5,6,7,8,9,10];
let sum = 0 ;
for(let i = 0 ;i < arr.length; i++){
    if(arr[i]%2===0) sum+=arr[i]*arr[i];
}
console.log(sum)