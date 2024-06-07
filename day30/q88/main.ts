// This function turns text into an actual number
function convertStrngToNum(str:string):number{
    return Number(str)// Converts the string to a number
}
// Example: Changing "123" into a real number
console.log(convertStrngToNum("123"))// Outputs the number 123
// Now, "123" is not just text; it's a number we can use in calculations.


//Another Way

// This function turns text into an actual number
function strngToNum(str:string){
    let convert = parseFloat(str)  // Converts the string to a number
    return convert
}
// Example: Changing "123" into a real number
console.log(strngToNum("123"))// Outputs the number 123
// Now, "123" is not just text; it's a number we can use in calculations.