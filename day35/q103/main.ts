// This function returns a random boolean value
function rendomBoolen ():boolean{

    let num = Math.random() > 0.5
    
    
   return num  // Returns true if the random number is greater than 0.5
      
}

console.log(rendomBoolen())// Outputs either true or false randomly
// By comparing a random number to 0.5, we effectively get a true or false value randomly.
