var favBikes = ["Harley-Davidson Fat Boy", "Ducati Diavel", "Yamaha VMAX", "Kawasaki Ninja H2", "BMW R 1250 GS Adventure"];
for (var index = 0; index < favBikes.length; index++) {
    console.log("My favourite bike is: ".concat(favBikes[index]));
}
favBikes.forEach(function (favBikes) {
    console.log("I would like to own: ".concat(favBikes));
});
