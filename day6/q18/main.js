var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var place = ["canada", "maldives", "italy", "rome"];
console.log("\noriginal oder: ".concat(place));
console.log("\nAlphabatical oder:" + " " + __spreadArray([], place, true).sort());
console.log("\noriginal oder: ".concat(place));
console.log("\nReverse alphabatical oder:" + " " + __spreadArray([], place, true).sort().reverse());
console.log("\noriginal oder: ".concat(place));
console.log("\nReverse  oder:" + " " + __spreadArray([], place, true).reverse());
console.log("\noriginal oder: ".concat(place));
