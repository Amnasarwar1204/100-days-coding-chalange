// This function sees if both inputs are true
function checkBoolen (val1:boolean, val2:boolean):boolean{
// Only says true if both val1 and val2 are true
    return val1 && val2
};

// Trying it with true and false
console.log(checkBoolen(true,false));// Shows false
// It checks two things, but since one is false, the answer is false.