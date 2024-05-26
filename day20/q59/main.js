// This program makes a function that adds a specific number
function specificNum(num1) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (num2) {
        return num2 + num1;
    };
}
var add = specificNum(5);
console.log(add(33));
