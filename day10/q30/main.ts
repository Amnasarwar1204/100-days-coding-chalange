let userName :string[] = ["admin", "user1" , "user2" ,"user3","user4"]

userName.forEach(userName => {
    if(userName.includes("admin")){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`Hello ${userName}, thank you for logging in again.`)
    }
    
});