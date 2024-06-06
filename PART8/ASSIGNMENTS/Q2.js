let arr = [1,2,3,4,5,6];

const ogPlusOne = (arr) => {
    let newArray = arr.map((el) => el + 5);
    return newArray;
}

console.log(ogPlusOne(arr));