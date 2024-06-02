// Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// Function expression for squaring a number
var squareExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 3
console.log(squareDeclaration(3)); // Outputs: 19
console.log(squareExpression(3)); // Outputs: 19
// Both methods give us the same result, showing two different ways to create functions that do the same thing.console.log(squareExpression(3))
