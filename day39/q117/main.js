// This function evaluates a grade and logs the corresponding remark
function logSeason(num) {
    switch (num) {
        case 1:
        case 2:
        case 3:
            console.log("winter");
            break;
        case 4:
        case 5:
        case 6:
            console.log("spring");
            break;
        case 7:
        case 8:
        case 9:
            console.log("summer");
            break;
        case 10:
        case 11:
        case 12:
            console.log("fall");
            break;
        default:
            console.log("Invalid month");
            break;
    }
}
logSeason(15);
