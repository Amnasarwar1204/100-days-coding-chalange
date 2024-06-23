// Demonstrates 'this' behavior change in a nested function
let film = {
    name:"herry poter",
    call: function(){
        console.log( this.name)// Works as expected, logs "herry poter"
        let innercall = ()=>{
            console.log(this.name)// Still accesses film's 'name' due to arrow function capturing 'this' from outer scope
        

        };
        innercall()
        
    }
}
film.call()
// This example shows that using an arrow function for the inner method preserves the 'this' context from the outer method.

