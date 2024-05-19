function makeShirt(size, message) {
    size.forEach(function (size) {
        console.log("Making a ".concat(size, " t-shirt with a message ").concat(message));
    });
}
makeShirt(["'medium'", "'large'"], "'I love Typescrip'");
makeShirt(["small"], "Dive into Coding");
