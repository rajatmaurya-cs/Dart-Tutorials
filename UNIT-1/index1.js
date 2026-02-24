


// ✅functions

// function abc(){
//     a = 10 ;
//     console.log(this.a)
// console.log("This will give a value correct")
// }

// abc()

// function abc(){
//    let a = 10 ;
//     console.log(this.a)
//     console.log("This will give undefined")
// }

// abc()



// ✅Arrow Function


// let soln = a => console.log(a)
// soln(10);

// let add = (a,b) => a+b
// console.log(add(10,20))

// let add2 = (a,b) => ({name : "Akash"})
// console.log(add2(10,20))

// Arrow function does not have its own this

// const obj = {

//     name: "Rahul",

//     normalfn: function () {
//         console.log("Normal : ", this.name);
//     },

//     arrowfn: () => {
//         console.log("Arrow : ", this.name)
//     }

//     //     Normal :  Rahul
//     // Arrow :  undefined


// }

// obj.normalfn();
// obj.arrowfn()

// Normal function
// this = object that calls the function

// Arrow function ignores obj 😬
// It looks outside for this.
// Where is it defined?

const obj = {
    name : "Rahul",
    showname:function(){
        const arrowfn = ()=>{
            console.log("Arrow : ", this.name)
        }
        arrowfn();
    }
    
}
obj.showname();


const calculator = (a,b,operator)=>{
    switch(operator){
        case '+' : return a+b;
        case '-' : return a-b;
        case '*' : return a*b;
        case '/' : return b!=0? a/b : "Cannot divide by zero"

    }
}


console.log(calculator(10,5,'+'))
console.log(calculator(10,5,'-'))
console.log(calculator(10,5,'*'))
console.log(calculator(10,0,'/'))
