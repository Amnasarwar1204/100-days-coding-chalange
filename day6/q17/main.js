var guestName = ["Uncle Zafar", "miss Rana", "Sonia"];
//show array
guestName.forEach(function (guestName) {
    console.log("Dear \"".concat(guestName, "\" would you like to join me for dinner at my place? "));
});
console.log("\nI am inviting more guest ,so here is our new list of guests ");
//adding more guests
guestName.unshift("Zarwa");
// let add = 2;
// let newguest = "Sham"
guestName.splice(2, 0, "Sham");
guestName.push("Amar");
guestName.forEach(function (guestName) {
    console.log("Dear \"".concat(guestName, "\" would you like to join me for dinner at my place? "));
});
console.log("\nSorry we can not arrange big table,only two people will be invited.");
//inviting only two guests
var guestName1 = guestName.slice(0, 1);
guestName1.forEach(function (guestName1) {
    console.log("Dear \"".concat(guestName1, "\" your are still invited "));
});
// show remaning guests
// let remaningGuest = guestName.slice(2);
console.log("\nsorry ".concat(guestName.slice(2), " you are not invited "));
//show empty array
var emptyArray = guestName1.slice(0, 0);
console.log(emptyArray);
