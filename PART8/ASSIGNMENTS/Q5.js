let Obj1 = {
    name: "darshan",
    age: 20
};

let Obj2 = {
    name: "siddhesh",
    age: 19
}

const mergeObjects = (object1 , object2) => ({ ...object1, ...object2 });

console.log(mergeObjects(Obj1, Obj2));