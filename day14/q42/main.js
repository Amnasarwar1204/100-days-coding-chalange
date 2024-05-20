function show_magicians(name) {
    name.forEach(function (name) {
        console.log("The Great: ".concat(name));
    });
}
show_magicians(["Albus Dumbledore", "Severus Snape", "Sirius Black"]);
