// Original function for calculating the area of a rectangle
function calculateArea(width, length) {
    return width * length;
}
console.log(calculateArea(2, 4));
// Refactored into an arrow function
var calculatearea = function (width, length) {
    return width * length;
};
console.log(calculateArea(2, 4));
