var laptop = {
    brand: "Apple",
    model: "Macbook Pro",
    year: "2006",
    describe: function () {
        console.log("THis Brand is: ".concat(this.brand, ", Model is: ").concat(this.model, ", and year is: ").concat(this.year));
    }
};
laptop.describe();
