// A list of grades
let grades = [83, 94, 62, 99, 51, 77];

// Calculates the average grade
let averageGrade = grades.reduce((total,grades) =>  total + grades , 0 ) / grades.length

console.log(averageGrade);

