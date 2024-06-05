function sum(a,b = 2){      //b has default value as 2
    return a+b;
}

console.log(sum(1,5));    // 1+5
console.log(sum(2));      //2+2

//WRONG CASE
function sum2(a = 2, b){
    return a+b;
}

console.log(sum2(2));  //op will be NaN because the val 2 will get insert in the var a