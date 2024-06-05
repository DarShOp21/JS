//Write a JavaScript function to extract unique characters from a string.
//Example: str = “abcdabcdefgggh” ans = “abcdefgh”

function extractUniqChar(str){
    let unique = [];
    str = str.split("");
    for(let i = 0 ; i <= str.length ; i++){
        if(unique.includes(str[i])){}
        else{
            unique.push(str[i]);
        }
    }
    unique = unique.join("");
    return unique
}

console.log(extractUniqChar("abcdabcdefgggh"));
