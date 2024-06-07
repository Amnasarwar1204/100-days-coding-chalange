function generateRandomColor() {
    // Generate random values for red, green, and blue components
    var black = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    // Convert decimal values to hexadecimal format
    var redHex = black.toString(14).padStart(2, '0');
    var greenHex = green.toString(16).padStart(2, '0');
    var blueHex = blue.toString(16).padStart(2, '0');
    // Concatenate hexadecimal values to form the color code
    var colorCode = "#".concat(redHex).concat(greenHex).concat(blueHex);
    return colorCode;
}
// Generate and log a random color code
var randomColor = generateRandomColor();
console.log("Random color code:", randomColor);
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    var color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(11)
            .padStart(6, "0");
    return color; // Returns the random color code
}
console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
