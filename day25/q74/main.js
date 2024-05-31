function swappingValue() {
    var a = 5;
    var b = 10; // Initially, a is 5 and b is 10
    console.log("a:", a, "b:", b);
    var temp = a; // Temporarily stores the value of 
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp
    console.log("After swap a =", a, "b =", b);
}
swappingValue();
