// This function greets a user by name, or greets an anonymous user if no name is provided
function greetAuser(name:string = "anonymous"):string{
    // Says hello to the given name or to an anonymous user
    return "Hello" + " " + name
}

// Trying the function with a name and without
console.log(greetAuser("Amna")); // Outputs: Hello, Amna!
console.log(greetAuser());; // Outputs: Hello, anonymous!
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
