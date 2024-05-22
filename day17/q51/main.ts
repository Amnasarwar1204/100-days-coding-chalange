// Original function for calculating the area of a rectangle
function calculateArea(width:number,length:number){
    return width * length
}

console.log(calculateArea(2,4))

// Refactored into an arrow function
let calculatearea = (width:number,length:number)=>{
    return width * length
}
console.log(calculateArea(2,4))