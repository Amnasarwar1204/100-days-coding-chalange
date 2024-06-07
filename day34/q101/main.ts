// Generates a random integer between 1 and 10
function generate():number{

    let find = Math.floor(Math.random() * 10) +1
    return find

}

console.log(generate());// Outputs a random integer between 1 and 10
// This function combines Math.random() with Math.floor() to create a random integer within our range.



//without function
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number between 1 and 10:", randomNumber);