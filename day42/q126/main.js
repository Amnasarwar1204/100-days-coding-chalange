var film = {
    name: "herry poter",
    call: function () {
        var _this = this;
        console.log(this.name);
        var innercall = function () {
            console.log(_this.name);
        };
        innercall();
    }
};
film.call();
// const myObject = {
//     property: "Value",
//     outerMethod: function () {
//       console.log(this.property); // Works as expected, logs "Value"
//       const innerMethod = () => {
//         console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
//       };
//       innerMethod();
//     },
//   };
//   myObject.outerMethod();
