function city_country(city, country) {
    return ("\"".concat(city, "\" : \"").concat(country, "\""));
}
console.log(city_country("Karachi", "pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Mumbai", "India"));
