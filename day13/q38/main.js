function describe_city(cities) {
    cities.forEach(function (cities) {
        console.log("".concat(cities, " is in Pakistan. "));
    });
}
var city = ["Karachi", "lahore", "Multan"];
describe_city(city);
//Default value
city = ["Japan", "Paris"];
describe_city(city);
