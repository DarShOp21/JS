//REST: it will collect multiple data and store it in an array

function print(...args){  //it will take multiple val , not an array
    for(var i = 0 ; i < args.length ; i++){
        console.log(`You gave : ${args[i]}`);
    }
}

console.log(print(1,2,3,4,5,6));