var scores = [32, 56, 84, 90, 34];
var average = scores.reduce(function (total, scores) { return total + scores; }, 0) / scores.length;
console.log(average);
//another way 
// This program calculates the average of all scores given
function sCore() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    // Adds all scores together and divides by the number of scores
    var aVerage = num.reduce(function (sum, num) { return sum + num; }, 0);
    return aVerage / num.length;
}
// Example: finding the average of four scores
console.log(sCore(80, 90, 100, 70)); // Shows the average score
// We add up all the scores, then divide by how many there are.
