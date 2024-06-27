// Reusing the person object from Question 133
var personInfo = {
    name: "Amna",
    age: 29,
    city: "Karachi"
};
// Converts the object into a JSON string with indentation
var jsonStringe = JSON.stringify(personInfo, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(jsonStringe);
/* Outputs:
{
  "name": "Amna",
  "age": 29,
  "city": "Karachi"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
