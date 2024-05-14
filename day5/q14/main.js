var guestList = ["Uncle Zafar", "miss Rana", "Sonia"];
for (var index = 0; index < guestList.length; index++) {
    console.log("".concat(guestList[index], " : i would like to invite for dinner at my olace"));
}
guestList.forEach(function (guestList) {
    console.log("\nI would like to invite for dinner ".concat(guestList));
});
