function makeShirt(size:string[] , message:string){

size.forEach(size => {
    console.log(`Making a ${size} t-shirt with a message ${message}`)   
    });
    

}

makeShirt(["'small'","'medium'","'large'"],"'Eat, Sleep, Code, Repeat'" )