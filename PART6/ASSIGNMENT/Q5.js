//Write a JavaScript function to generate a random number within a range (start, end)

function randomNumb(start, end){
    let random = Math.floor(Math.random() * (end-start+1)) + start;
    return random;   
}
console.log(randomNumb(10, 11));
