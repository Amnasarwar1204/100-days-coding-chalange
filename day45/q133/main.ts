// Defines a JavaScript object
const personInfo = {
    name:"Amna",
    age:29,
    city:"Karachi"
}

// Converts the object into a JSON string
const jsonstring = JSON.stringify(personInfo);

console.log(jsonstring);// Outputs: {"name":"Am","age":29,"city":"Karachi"}
// Demonstrates converting an object to a JSON string, making it easy to store or transmit.