let scores = [32,56,84,90,34];

let average = scores.reduce((total,scores) =>total + scores,0 ) / scores.length

console.log(average)


//another way 
// This program calculates the average of all scores given
function sCore (...num:number[]){
    // Adds all scores together and divides by the number of scores
    let aVerage = num.reduce((sum,num) => sum + num,0 ) 
    return aVerage / num.length
}

// Example: finding the average of four scores
console.log(sCore(80, 90, 100, 70)) // Shows the average score
// We add up all the scores, then divide by how many there are.