var arrowFunction = function () {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    return num.reduce(function (a, b) { return a * b; }, 1);
};
console.log(arrowFunction(1, 2, 3, 4));
