// This profile sets itself up and can share info about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "John";
    var age = 25;
    // This part shares the user's details
    return {
        showinfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.showinfo(); // It says the user's name and age
// We made a self-setup profile that can talk about the user.
//another way
var userprofile = {
    name: "John",
    age: 25,
};
var a = userProfile;
console.log(a);
