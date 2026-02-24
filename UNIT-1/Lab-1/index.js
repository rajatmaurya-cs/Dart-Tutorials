// 1(a). Function using REST operator to accept multiple numbers and return their sum
// function sumNumbers(...numbers) {
//     return numbers.reduce((sum, num) => sum + num, 0);
// }

// console.log(sumNumbers(10, 20, 30, 40)); // 100


// 1(b). Merge two arrays using SPREAD operator

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const mergedArray = [...arr1, ...arr2];

// console.log(mergedArray);
// [1, 2, 3, 4, 5, 6]


// 1(c). Copy and update an object using SPREAD operator
// const user = {
//     name: "Shyam",
//     age: 22,
//     city: "Delhi"
// };

// const updatedUser = {
//     ...user,
//     age: 23,
//     city: "Noida"
// };

// console.log(updatedUser);


// 1(d). Passing array elements as function arguments using SPREAD
// function multiply(a, b, c) {
//     return a * b * c;
// }

// const values = [2, 3, 4];

// console.log(multiply(...values)); // 24
