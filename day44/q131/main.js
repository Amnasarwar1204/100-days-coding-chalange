"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
// In file: main.ts
var person = /** @class */ (function () {
    function person(name) {
        this.name = name;
    }
    person.prototype.info = function () {
        console.log("Hello my name is ".concat(this.name));
    };
    return person;
}());
exports.person = person;
// Exports the Person class
