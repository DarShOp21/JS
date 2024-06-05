var arr = ["darsh", "naresh", "ayare"];

//method 1
function concatArr(arr){
    var str = ""
    for(var i = 0 ; i < arr.length ; i++){
        str = str.concat(arr[i])
    }
    return str;
}

//method 2
function concatArr2(arr){
    var str = ""
    for(var i = 0 ; i < arr.length ; i++){
        str += arr[i];
    }
    return str;
}

console.log(concatArr(arr));
console.log(concatArr2(arr));