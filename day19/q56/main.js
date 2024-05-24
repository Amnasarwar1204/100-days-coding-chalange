// A mixed bag of items
var items = [1, "apple", "orange", 8, "graps"];
// Picks out only the words
var select = items.filter(function (items) { typeof items === "string"; });
// Shows the list of just words
console.log(select); // Output: ["apple", "banana", "carrot"]
// This line checks each item: if it's a word, it goes into the new list.
