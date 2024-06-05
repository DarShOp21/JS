//Write a JavaScript function that returns array elements larger than a number

function elemLargerThanNum(arr, num){
    let larger = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i].length > num){
            larger.push(arr[i]);
        }
    }
    return larger;
}

let arr = ["darshan", "d", "vibha", "kart"];
console.log(elemLargerThanNum(arr, 4));
