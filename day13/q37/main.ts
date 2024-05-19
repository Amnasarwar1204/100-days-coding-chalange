function makeShirt(size:string[] , message:string){

    size.forEach(size => {
        console.log(`Making a ${size} t-shirt with a message ${message}`)   
        });
        
    
    }
    
    makeShirt(["'medium'","'large'"],"'I love Typescrip'" )
    makeShirt(["''Free size"], "'Dive into Coding'")