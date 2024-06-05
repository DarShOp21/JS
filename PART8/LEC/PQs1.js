//Check if all numbers in an array is multiple of 10 or not;

// let arr1 = [10,20,30,40,50];
let arr1 = [10,40,5,90,80];

let  multipleOf10 = arr1.every((el) => (el % 10 == 0));
console.log(multipleOf10);
