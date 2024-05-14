var guest = ["Uncle Zafar", "miss Rana", "Sonia"];
console.log("I am inviting more guest ");
console.log("Here is our new inivation");
guest.unshift("Zarwa");
// let middle = 2;
// let newGuest = "Sham"
guest.splice(2, 0, "Sham");
guest.push("Amar");
guest.forEach(function (guest) {
    console.log("Dear \"".concat(guest, "\" would you like to join me for dinner at my place? "));
});
