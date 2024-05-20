let names :string[] = ["Albus Dumbledore", "Severus Snape", "Sirius Black"]

function show_magicians(names:string[]){


    names.forEach(names => {
        console.log(`${names}`)
        
    });
}

console.log("The original array")
show_magicians(names)



function makeGreat(name:string[]){

    let greatMagicians:string[] = []

    name.forEach(name => {
        greatMagicians.push(`The Great: ${name}`)
        
    });
    return greatMagicians
}

console.log("This is my modified copy array")
let greatMagicians = makeGreat(names);
show_magicians(greatMagicians)