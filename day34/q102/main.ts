// Calculates the absolute difference between -5 and 5
let calculate = Math.abs(-5 - 5 )
console.log(calculate);// Outputs: 10
// This line shows the absolute value of the difference between -5 and 5, ignoring the sign.


//another way
function absolutedifference(a:number, b:number):number{
    let calculate = Math.abs(a - b )
    return calculate
}

console.log(absolutedifference(-5 , 5))