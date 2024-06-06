let arr = [1,2,3,4,5];

const avgOfSquareOfArr = (arr) => {
    let sum = 0;
    let square = arr.map((el) => el*el);
    let ans = square.forEach((el) => {
        sum += el
    });
    return sum/arr.length;
}
console.log(avgOfSquareOfArr(arr));