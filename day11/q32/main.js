var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["User1", "User6", "User7", "admin", "User9"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase() == new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_users, " is available."));
    }
});
