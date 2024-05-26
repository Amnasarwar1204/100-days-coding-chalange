// This program makes a function that adds a specific number
function specificNum (num1:number){
    // This is the magic box. It takes a number and adds your special number to it
    return function (num2:number){
        return num2 + num1
    }
}

// Making a magic box that adds 5
let add = specificNum(5)
console.log(add(33))// If we put 33 in the box, it gives us 38
// We made a function (magic box) that adds 5 to any number.