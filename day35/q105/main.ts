// This function simulates rolling a dice and returns a number between 1 and 6
function diceroll ():number{
    let diceNum = Math.floor(Math.random() * 6) + 1
    return diceNum  // Calculates a random integer from 1 to 6
}

console.log(diceroll());// Outputs a random number between 1 and 6
// Here, we mimic the action of rolling a dice and getting a result.