// A mixed bag of items
let items = [1,"apple","orange",8,"graps"] 


// Picks out only the words
let select = items.filter((items)=> typeof items === "string")
// let select = items.filter((items)=> {return typeof items === "string"})


// Shows the list of just words
console.log(select);// Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.

