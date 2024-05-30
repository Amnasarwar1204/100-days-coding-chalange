// Using `let` for a variable that can be reassigned
let num1 = 6;
num1 = 8;// Works fine because `let` allows reassignment

console.log(num1);// Shows 8

// Trying to reassign a `const`-declared variable
const num2 = 9
try {
num2 = 4}
    catch(error) {    //but with catch help it will print only in js not ts
        console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}

console.log(num2);
// This example illustrates that `const` prevents changing the variable once it's set.



  