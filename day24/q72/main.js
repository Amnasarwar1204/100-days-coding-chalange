{
    var blockLet = 22;
    var blockConst = 33;
    // console.log(blockLet);
    // console.log(blockConst)
}
try {
    console.log(blockLet); // This will fail
    console.log(blockConst); // This will fail
}
catch (error) {
    console.log("`blocks` are not accessible outside the block");
}
