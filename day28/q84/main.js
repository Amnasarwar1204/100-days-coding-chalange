// This function swaps "JavaScript" with "TypeScript" in a sentence
function rePlacment(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
    // Uses a regular expression with the 'g' flag for a global replacement
}
// Example: Changing a programming language name in a sentence
console.log(rePlacment("I love JavaScript and JavaScript is awesome!"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
