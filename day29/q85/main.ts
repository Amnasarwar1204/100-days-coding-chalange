// This function finds where "code" first shows up in a text
function position(str:string):number{
    return str.indexOf("code")// Looks for "code" and tells where it found it
 
}
  
// Example: Searching within a sentence
console.log(position("Do practice code daily"));// Outputs the start position of "code"
  // It tells us the position number where "code" starts.

