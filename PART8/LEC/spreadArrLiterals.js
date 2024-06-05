let arr = [1,2,3,4,5];
let newArr = [...arr];   //will make a copy of the array arr
console.log(newArr);

let chars = 'hello';
let sepChar = [...chars];  //will separate all the char from the 'chars' and store it in 'sepChar'
console.log(`Separted chars : ${sepChar}`);

let even = [2,4,6,8,10];
let odd = [1,3,5,7,9];
let nums = [...even,...odd];    //merge the arrays 'even' and 'odd'
console.log(nums);