function show_magicians(name:string[]){

    name.forEach(name => {
        console.log(`The Great: ${name}`)
        
    });
}

show_magicians(["Albus Dumbledore", "Severus Snape", "Sirius Black"])