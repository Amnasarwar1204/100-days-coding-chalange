// // This function shows every detail about an object
function car(obj:object){
    for (const key in obj) {
        // Loops through each property in the object
        console.log(key + ":" + obj[key]);
         // Shows the property name and its value
    }
}

// Using the function with a car object
car( {
        make:"Tesla",
        model:"Model S",
        year:2023
    })
 // It tells us each piece of information stored about the car.

