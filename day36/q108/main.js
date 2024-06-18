// This function compares two strings, ignoring case sensitivity
function checkIfIdentical(str1, ste2) {
    // Converts both strings to lowercase before comparison
    return str1.toLowerCase() === ste2.toLowerCase();
}
console.log(checkIfIdentical("amna", "amna")); // Outputs: true
console.log(checkIfIdentical("world", "Word")); // Outputs: false
// We make both strings lowercase to ensure the comparison ignores case differences.
