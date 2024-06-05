//does a specific operation on every elem of the arry and store it in diff array

let arr = [1,2,3,4,5];

let double = arr.map((el) => (el * 2));
let square = arr.map((el) => el*el);

console.log(`Double of array ${arr}    is    ${double}`);
console.log(`Square of array ${arr}    is    ${square}`);