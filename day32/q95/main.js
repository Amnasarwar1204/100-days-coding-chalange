function returnArray(num) {
    var find = num.map(function (num) { return num > 10; });
    return find;
}
console.log(returnArray([1, 5, 78, 93, 6, 9, 12]));
