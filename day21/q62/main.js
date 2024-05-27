// Creating a blueprint (interface) for student information
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());
;
// Filling in the blueprint with an example student
var student = {
    name: "amna",
    age: 29,
    courses: ["Math", "Science", "History"]
};
// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
