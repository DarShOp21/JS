function sumOfNum(num){
    var sum = 0;
    for(var i = 1 ; i <= num ; i++){
        sum += i;
    }
    return sum;
}

console.log(sumOfNum(10));