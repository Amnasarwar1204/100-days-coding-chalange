function greetAuser(name) {
    if (name === void 0) { name = "anonymous"; }
    return "hello" + " " + name;
}
console.log(greetAuser("amna"));
console.log(greetAuser());
