// This function adds a number and a string that represents a number
function mixedType(num1:string,num2:number):number{
      // Converts the string to a number and adds it to the first number
    return Number(num1) + num2
}

// Trying it with 5 and "5"
console.log(mixedType("5",5));// Shows 10
// The string "5" is turned into the number 5, and then added to 5.

