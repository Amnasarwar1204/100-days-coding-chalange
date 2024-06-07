function roundNum(decimal) {
    if (decimal === void 0) { decimal = 3.14159; }
    var round = decimal.toFixed(2);
    return round;
}
console.log(roundNum());
