var guest = ["Uncle Zafar", "miss Rana", "Sonia"];
guest.forEach(function (guest) {
    console.log("Dear \"".concat(guest, "\" would you like to join me for dinner at my place? "));
});
console.log("\ndue to some work \"".concat(guest[1], "\" is not comming"));
guest.splice(1, 1, " Miss Ayesha");
console.log("\nso now \"".concat(guest[1], "\" is comming"));
console.log("\nHere is new list of guest");
guest.forEach(function (guest) {
    console.log("Dear \"".concat(guest, "\" would you like to join me for dinner at my place? "));
});
//another way 
guest.forEach(function (guest) {
    console.log("Dear \"".concat(guest, "\" would you like to join me for dinner at my place? "));
});
console.log("\ndue to some work \"".concat(guest[1], "\" is not comming"));
var newGuest = " Miss Ayesha";
guest[1] = newGuest;
console.log("\nso now \"".concat(newGuest, "\" is comming"));
console.log("Here is new list of guest");
guest.forEach(function (guest) {
    console.log("Dear \"".concat(guest, "\" would you like to join me for dinner at my place? "));
});
