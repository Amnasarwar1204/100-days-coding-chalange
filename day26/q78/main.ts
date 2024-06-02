// Function declaration for squaring a number
function squareDeclaration(number:number):number{
    
    return number*number
}

// Function expression for squaring a number
const squareExpression = function(number:number):number{
    
    return number*number
}

// Using both functions to square the number 3
console.log(squareDeclaration(3))// Outputs: 9
console.log(squareExpression(3)); // Outputs: 9
// Both methods give us the same result, showing two different ways to create functions that do the same thing.console.log(squareExpression(3))