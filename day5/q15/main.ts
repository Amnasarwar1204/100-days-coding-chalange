let guest : string[] = ["Uncle Zafar","miss Rana","Sonia"];


guest.forEach(guest => {
    console.log(`Dear "${ guest}" would you like to join me for dinner at my place? `); 
});

console.log(`\ndue to some work "${guest[1]}" is not comming`);
guest.splice(1,1," Miss Ayesha");
console.log(`\nso now "${guest[1]}" is comming`)


console.log("\nHere is new list of guest");
guest.forEach(guest => {
    console.log(`Dear "${ guest}" would you like to join me for dinner at my place? `);
});


//another way 


guest.forEach(guest => {
    console.log(`Dear "${ guest}" would you like to join me for dinner at my place? `); 
});


console.log(`\ndue to some work "${guest[1]}" is not comming`);

let newGuest = " Miss Ayesha"
guest[1] = newGuest;



console.log(`\nso now "${newGuest}" is comming`)
console.log("Here is new list of guest");
guest.forEach(guest => {
    console.log(`Dear "${ guest}" would you like to join me for dinner at my place? `); 
});
