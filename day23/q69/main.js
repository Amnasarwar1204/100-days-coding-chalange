function divideAndRemainder(num1, num2) {
    quoitent: Number;
    reminder: Number;
    var quoitent = num1 % num2;
    var reminder = Math.floor(num1 / num2);
    return { quoitent: quoitent, reminder: reminder };
}
console.log(divideAndRemainder(10, 3));
