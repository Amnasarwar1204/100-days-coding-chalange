let numbers:number[] = [1,2,3,4,5,6,7,8,9];

numbers.forEach(numbers => {
    let add = "th";
if(numbers == 1){
     add = "st"
}
else if(numbers == 2){
    add = "nd"
}
else if(numbers == 3){
        add = "rd" 
    }
    console.log(`${numbers}${add}`)
});
