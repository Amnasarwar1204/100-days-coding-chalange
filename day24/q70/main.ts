// This function prints numbers from 1 to 5 using a loop
function printFunctionWithLet(){
    for (let i = 1; i < 6; i++) {
        // Uses let for loop variable i
        console.log(i) //it console 1 to 5
        
    }
    // i is not accessible here, outside the loop, because it's defined with let
}

printFunctionWithLet();
// This shows that let limits i to the loop, preventing errors from using i where it's not intended.