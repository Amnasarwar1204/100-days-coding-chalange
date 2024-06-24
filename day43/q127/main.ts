// Traditional function expression
function info(name:string,age:number){
    return (`my name is ${name} and my age is ${age}`)
}


// Converted to arrow function
let infoo = (name,age)=>
    `my name is ${name} and my age is ${age}`

console.log(info("Amna",29));// Outputs: my name is Amna and my age is 29
console.log(infoo("Amna",29));// Outputs: my name is Amna and my age is 29
// Demonstrates the conversion of a traditional function expression to an arrow function.