// This function compares two strings, ignoring case sensitivity
function checkIfIdentical(str1:string,ste2:string):boolean{
     // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === ste2.toLowerCase()
}

console.log(checkIfIdentical("amna","amna"));// Outputs: true
console.log(checkIfIdentical("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.