//SPREAD : Expands an iterable into multiple values

let arr = [2, 4,5,7,4,2,3,2,1,2,4,6,66,42,23,22,4,2,2,7]
console.log(`Min: ${Math.min(...arr)}`);  // similar to Math.min(arr[0], arr[1], ......, arr[arr.length -1])
console.log(`Max: ${Math.max (...arr)}`);