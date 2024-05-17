var userName = ["admin", "user1", "user2", "user3", "user4"];
userName.forEach(function (userName) {
    if (userName.includes("admin")) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(" Hello ".concat(userName, ", thank you for logging in again."));
    }
});
