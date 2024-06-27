// Defines a JavaScript object
var personInfo = {
    name: "Amna",
    age: 29,
    city: "Karachi"
};
// Converts the object into a JSON string
var jsonstring = JSON.stringify(personInfo);
console.log(jsonstring); // Outputs: {"name":"Amna","age":29,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.
