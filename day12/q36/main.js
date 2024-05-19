function makeShirt(size, message) {
    size.forEach(function (size) {
        console.log("Making a ".concat(size, " t-shirt with a message ").concat(message));
    });
}
makeShirt(["'small'", "'medium'", "'large'"], "'Eat, Sleep, Code, Repeat'");
