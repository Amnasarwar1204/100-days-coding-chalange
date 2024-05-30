// Demonstrating block scope
{
    let blockLet = 22;
    let blockConst = 33;
    console.log(blockLet);// Works fine here
    console.log(blockConst)// Works fine here
}

try{
    console.log(blockLet);// This will fail
    console.log(blockConst)// This will fail
}catch(error){    //but with catch help it will print only in js not ts

    console.log("`blocks` are not accessible outside the block")

}  
// This shows that `let` and `const` keep variables safe inside the block where they're defined. 