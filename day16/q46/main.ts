let laptop = {
    brand: "Apple",
    model: "Macbook Pro",
    year: "2006",
    describe : function(){
        console.log(`THis Brand is: ${this.brand}, Model is: ${this.model}, and year is: ${this.year}`);
    }
}

laptop.describe();