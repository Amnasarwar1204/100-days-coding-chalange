function hobbies (...hobby:string[]){
    hobby.forEach(hobby => {
        console.log(`I enjoy ${hobby}`) 
    });
    
}

hobbies("reading","coding","crafting");