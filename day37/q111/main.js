// This function categorizes a person's age group
function categorizeAge(age) {
    if (age < 2) {
        return "Child";
    }
    else if (age <= 18) {
        return "Teenage";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(55)); // Outputs:
console.log(categorizeAge(1)); // Outputs:
console.log(categorizeAge(15)); // Outputs: adult
// Based on the age provided, we log the corresponding age group.
