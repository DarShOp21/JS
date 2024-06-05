arr = [1,2,3,4,5,6,7,8,9];

//METHOD-1
console.log("METHOD-1");
const print = function (el){
    console.log(el);
}
arr.forEach(print);

//METHOD-2
console.log("\nMETHOD-2");
arr.forEach((el) => {
    console.log(el);
})