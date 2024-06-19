// Creates a Map to store student IDs (keys) and names (values)
let studentInfo = new Map <number , string>()
studentInfo.set(1,"Amna");
studentInfo.set(2,"Sana");
studentInfo.set(3,"Zara");


// Iterates over the Map and logs each student ID and name
studentInfo .forEach((name , id)=> {
    console.log(id + ":" + name);
    
});
// This loop goes through each student and logs their ID and name.

