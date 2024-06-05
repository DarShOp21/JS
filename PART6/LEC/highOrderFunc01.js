// HIGH ORDER FUNCTION is a funtion which takes 
// one or multiple function as an arguments


function multipleGreet(func, n){          //High order function
    for(let i = 0 ; i < n ; i++){
        func();
    }
}

let greet = function(){
    console.log("Namaste!!");
}

multipleGreet(greet, 5); 