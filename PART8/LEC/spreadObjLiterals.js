let data = {
    name : "darshan",
    age : 20,
}
let dataCopy = {...data, id : 789};  //make a copy of data and also add 'id' in the data
console.log(dataCopy);

let arr = [1,2,3,4,5];
let obj = {...arr};  // will store the val in arr in the obj having index no.  as their keys
console.log(obj);