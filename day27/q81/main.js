// // This function shows every detail about an object
function car(obj) {
    for (var key in obj) {
        console.log(key + ":" + obj[key]);
    }
}
// Using the function with a car object
car({
    make: "Tesla",
    model: "Model S",
    year: 2023
});
