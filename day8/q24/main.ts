console.log("equality and inequality with strings");
let fruite: string = "apple";
console.log(fruite == "Apple"); //false
console.log(fruite == "apple"); //true


console.log("lower case function");
let fruite1: string = "apple";
console.log(fruite1.toLowerCase() == "Apple"); //false


console.log("greater than and less than");
let num: number = 22;
console.log(num > 21); //true
console.log(num < 21); //false

console.log("greater than or equal to");
let num1: number = 22;
console.log(num1 >= 21); //true
console.log(num1 <= 21); //false


console.log("using 'and' and 'or' operators");
console.log(true && false); //false
console.log(true || false); //true

console.log("whether an item is in a array");
let array :string[] = ["apple","mango","orange"]
console.log("Is 'apple' a fruite?"); 
console.log(array.includes("apple"));//true

console.log("whether an item is not in a array");
let array1 :string[] = ["apple","mango","orange"]
console.log("Is 'carrot' a fruite?"); 
console.log(array1.includes("melon"));//false