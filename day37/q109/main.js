// Checks the current hour and logs "Good Morning" if it's before 12 PM
// let currentTime = new Date()
// if (currentTime .getHours() < 12){
//     console.log("Good Morning")
// }
// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // It's morning if before 12 PM
}
else {
    console.log("Go to sleep");
}
// This simple check helps us greet users appropriately based on the time of day.
