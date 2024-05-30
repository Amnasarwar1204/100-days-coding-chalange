// This function divides two numbers and finds the quotient and remainder
function divideAndRemainder(num1:number,num2:number):{
    quoitent: Number
    reminder:Number}
// Calculates the quotient and remainder
   { let quoitent = num1 % num2
    let reminder = Math.floor(num1 / num2)
    // Returns both in an object
return {quoitent, reminder};
} 

// Trying it with 10 divided by 3
console.log(divideAndRemainder(10,3)) // Shows { quotient: 3, remainder: 1 }
// It shows how many times 3 goes into 10, and what's left over.

