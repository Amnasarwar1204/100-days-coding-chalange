// Arrow function that calculates the product of all its parameters
let arrowFunction = (...num:number[])=>
    num.reduce((a,b) => a*b,1 )

console.log(arrowFunction(1,2,3,4))// Outputs: 24
// This function uses the rest parameter syntax to take any number of arguments, then multiplies them togethe