// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(num) {
    // Uses the modulo operator to check for no remainder
    return (num % 2 === 0 && num % 3 === 0);
}
console.log(isDivisibleByTwoAndThree(44)); // Outputs: 
console.log(isDivisibleByTwoAndThree(14)); // Outputs: 
// Logical operators help us verify the number's divisibility by both 2 and 3.
