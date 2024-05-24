// A list of grades
var grades = [83, 94, 62, 99, 51, 77];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averageGrade);
