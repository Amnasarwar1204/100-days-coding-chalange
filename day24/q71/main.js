// // Using `let` for a variable that can be reassigned
// let num1 = 6;
// num1 = 8;// Works fine because `let` allows reassignment
// console.log(num1);// Shows 8
// // Trying to reassign a `const`-declared variable
// const num2 = 9
// try {
// num2 = 4}
//     catch(error) {
//         console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
// }
// console.log(num2);
// // This example illustrates that `const` prevents changing the variable once it's set.
try {
    var result = 10 / 0; // This line will cause an error (division by zero)
}
catch (error) {
    console.log("Error:", error.message); // Output: "Error: Division by zero"
}
