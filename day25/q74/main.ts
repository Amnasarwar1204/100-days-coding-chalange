// This function swaps the values of two variables
function swappingValue(){
    let a = 5;
    let b = 10;   // Initially, a is 5 and b is 10
    console.log("a:" , a ,"b:" , b)

      let temp = a; // Temporarily stores the value of 
      a = b;   // Sets a to b's value
      b = temp;  // Sets b to a's original value stored in temp

      console.log("After swap a =" ,a ,"b =", b) // Logs the swapped values
    }


     

swappingValue();
// We use a temporary variable to hold one value while we swap them, like a magic trick!