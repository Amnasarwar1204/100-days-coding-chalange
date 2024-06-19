var studentInfo = new Map();
studentInfo.set(1, "Amna");
studentInfo.set(2, "Sana");
studentInfo.set(3, "Zara");
studentInfo.forEach(function (name, id) {
    console.log(id + ":" + name);
});
