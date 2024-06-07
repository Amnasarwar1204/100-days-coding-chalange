// Defines an array with some words
var words = ["JavaScript", "Python", "Java", "C++", "C#", "TypeScript", "Ruby", "Swift", "Go", "Kotlin"];
// Uses .map() to create a new array with the length of each word
var lengths = words.map(function (words) { return words.length; });
console.log(lengths); // Outputs: [5, 5, 10, 10]
// Each number in the new array represents the length of the corresponding word in the original array.
