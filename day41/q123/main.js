function logUntilVowel(str) {
    var vowel = "aeiouAEIOU";
    for (var _i = 0, vowel_1 = vowel; _i < vowel_1.length; _i++) {
        var char = vowel_1[_i];
        if (vowel.includes(vowel)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char);
    }
}
logUntilVowel("hello my name is Amna");
