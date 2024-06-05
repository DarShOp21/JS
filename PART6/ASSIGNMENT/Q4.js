//Write a JavaScript function to count the number of vowels in a String argument.

let str = "darshan";
let vowels = ["a","e","i","o","u"];

function numbOfVowels(str){
    str.split("");
    let counter = 0;
    let vowelsInStr = []
    for(let i = 0 ; i < str.length ; i++){
        if(vowels.includes(str[i]) && !vowelsInStr.includes(str[i])){
            vowelsInStr.push(str[i]);
            counter++;
        }
    }
    return counter;
}

console.log(numbOfVowels(str));