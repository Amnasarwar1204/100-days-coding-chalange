// This function filters an array, keeping only numbers greater than 10
function returnArray(num:number[]){
    
    let find = num.filter((num) => num > 10)
    return find
}

// Example: Filtering an array of numbers
console.log(returnArray([1,5,78,93,6,9,12]))// Outputs: [ 78, 93, 12 ]
// The new array contains only the numbers that are greater than 10.