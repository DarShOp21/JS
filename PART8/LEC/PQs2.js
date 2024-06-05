//Create function to find min number among an array

function getMin(arr){
   let min = arr.reduce((min, el) => {
    if(el < min){
        return el;
    } else {
        return min;
    }
    })
    return min; 
}

let arr = [2,4,7,2,4,2,9,7,4,6,3,3];
let arr2 = [7, 6,8,2,3,4,5,1,9];

console.log(getMin(arr));
console.log(getMin(arr2));


