
function logUntilVowel(str:string):void{
    let vowel = "aeiouAEIOU"
    for (const char of vowel) {
        if (vowel.includes(vowel)){
            console.log(`First vowel found: ${char}`);
            break;
        }

       console.log(char) 
    }
}
logUntilVowel("hello my name is Amna")