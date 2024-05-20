var names = ["Albus Dumbledore", "Severus Snape", "Sirius Black"];
function show_magicians(names) {
    names.forEach(function (names) {
        console.log("".concat(names));
    });
}
console.log("The original array");
show_magicians(names);
function makeGreat(name) {
    var greatMagicians = [];
    name.forEach(function (name) {
        greatMagicians.push("The Great: ".concat(name));
    });
    return greatMagicians;
}
console.log("This is my modified copy array");
var greatMagicians = makeGreat(names);
show_magicians(greatMagicians);
