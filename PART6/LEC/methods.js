//METHOD : function stored in object is method

const calculator = {
    add : function(a,b){
        return a+b;
    },
    sub : function(a,b){
        return a-b;
    },
    mul : function(a,b){
        return a*b;
    }
}

console.log(calculator.add(1,2));
console.log(calculator.sub(10,5));
console.log(calculator.mul(2,9));