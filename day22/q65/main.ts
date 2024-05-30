// This function finds the leftover of dividing two numbers
function reminder(num1:number,num2:number):number{
    // Gives back the leftover of num1 divided by num2
    return num1  % num2
}

// Trying it with 5 divided by 2
console.log(reminder(15,2));// Shows 1
// This tells us the leftover, which is 1 here