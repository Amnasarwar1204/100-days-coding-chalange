let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "User7", "admin", "User9"];

new_users.forEach(new_users => {

    if(current_users.some(current_users => current_users.toLowerCase() == new_users.toLowerCase()))
        {
            console.log(`${new_users} will need to enter a new username.`);
        }else{console.log(`${new_users} is available.`);}
    
});




