var num = [1, 5, 78, 93, 6, 9, 12];
var add = num.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
console.log(add);
