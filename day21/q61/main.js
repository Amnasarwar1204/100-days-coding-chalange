// Making a list (enum) for different types of vehicles
var vehicles;
(function (vehicles) {
    vehicles[vehicles["car"] = 0] = "car";
    vehicles[vehicles["truck"] = 1] = "truck";
    vehicles[vehicles["motercycle"] = 2] = "motercycle";
})(vehicles || (vehicles = {}));
console.log(vehicles.car);
