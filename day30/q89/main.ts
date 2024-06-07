// This function rounds a number to two decimal places
function roundNum(decimal:number=3.14159){
    let round = decimal.toFixed(2)// Rounds
    return round
}

// Example: Rounding π to two decimal places
console.log(roundNum())// Outputs 3.14
// π is now rounded off, making it simpler to work with.