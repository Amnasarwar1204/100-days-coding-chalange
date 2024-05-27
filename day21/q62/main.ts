// Creating a blueprint (interface) for student information
class Student{
    name:string;
    age:number;
    courses:string[];

};

// Filling in the blueprint with an example student
let student : Student= {
    name: "amna",
    age: 29,
    courses: ["Math", "Science", "History"]
};


// Showing the student's information
console.log(student);
// We're using the blueprint to make sure our student has a name, age, and list of courses.
