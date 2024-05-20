function cars(manufacturer, model) {
    var keyword = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keyword[_i - 2] = arguments[_i];
    }
    var info = {
        manufacturer: manufacturer,
        model: model
    };
    //  keyword.forEach(([key, value]) => (info[key] = value));
    //   return info;
}
console.log(cars("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(cars("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
