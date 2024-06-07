// Defines an array with some words
let words :string[] = ["JavaScript","Python","Java","C++","C#","TypeScript","Ruby","Swift","Go","Kotlin"];

// Uses .map() to create a new array with the length of each word
let lengths:number[] = words.map((words) => words.length)

console.log(lengths);// Outputs: [10, 6, 4, 3, 2,10, 4, 5, 2, 6]
// Each number in the new array represents the length of the corresponding word in the original array.