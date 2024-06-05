let arr = [1,4,6,2,8,9,0,23,7];

let result = arr.reduce((max, el) => {
    if(max > el){
        return max;
    } else {
        return el;
    }
})

console.log(result);