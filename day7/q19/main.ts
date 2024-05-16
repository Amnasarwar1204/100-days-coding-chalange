let guestName : string[] = ["Uncle Zafar","miss Rana","Sonia"];


//show array
guestName.forEach(guestName => {
    console.log( `Dear "${guestName}" would you like to join me for dinner at my place? `)
});

console.log("\nI am inviting more guest ,so here is our new list of guests ")


//adding more guests
guestName.unshift("Zarwa");
// let add = 2;
// let newguest = "Sham"
guestName.splice(2,0,"Sham");
guestName.push("Amar");

guestName.forEach(guestName => {
    console.log( `Dear "${guestName}" would you like to join me for dinner at my place? `)
});

let totalGuest = guestName.length;

console.log(`Total guests in my list are ${totalGuest}`)