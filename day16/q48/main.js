var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var prize1 = [1200, 1500, 1100];
var prize2 = [1000, 1300, 1600];
var conbine = __spreadArray(__spreadArray([], prize1, true), prize2, true);
console.log(conbine);
var a = ["a", "b", "c"];
var b = ["d", "e", "f"];
var add = __spreadArray(__spreadArray([], a, true), b, true);
console.log(add);
