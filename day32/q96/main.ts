// This  calculates the sum of all numbers in an array
let num:number[] = [1,5,78,93,6,9,12]


// Example: Calculating the sum of an array of numbers
let add = num.reduce((previousValue , currentValue) => previousValue + currentValue , 0 )

console.log(add)// Outputs: 204
// It adds up all the numbers in the array, resulting in a single sum value.