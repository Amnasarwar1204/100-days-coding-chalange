// This function removes the last element from an array and returns it
function removeLastElement(last:string[]){
      return last.pop()// Removes and returns the last element of the array
    }
      


// Example: Removing the last fruit from the array
let fruits = [ 'Apple', 'Mango', 'Orange', 'Graps' ]

console.log(removeLastElement(fruits));// Outputs:  `Graps`
console.log(fruits);// Outputs: [ 'Apple', 'Mango', 'Orange' ]
// Here, we take out the last fruit and show the updated list.


