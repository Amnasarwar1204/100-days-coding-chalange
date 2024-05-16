console.log("equality and inequality with strings");
var fruite = "apple";
console.log(fruite == "Apple"); //false
console.log(fruite == "apple"); //true
console.log("lower case function");
var fruite1 = "apple";
console.log(fruite1.toLowerCase() == "Apple"); //false
console.log("greater than and less than");
var num = 22;
console.log(num > 21); //true
console.log(num < 21); //false
console.log("greater than or equal to");
var num1 = 22;
console.log(num1 >= 21); //true
console.log(num1 <= 21); //false
console.log("using 'and' and 'or' operators");
console.log(true && false); //false
console.log(true || false); //true
console.log("whether an item is in a array");
var array = ["apple", "mango", "orange"];
console.log("Is 'apple' a fruite?");
console.log(array.includes("apple")); //true
console.log("whether an item is not in a array");
var array1 = ["apple", "mango", "orange"];
console.log("Is 'carrot' a fruite?");
console.log(array1.includes("melon")); //false
