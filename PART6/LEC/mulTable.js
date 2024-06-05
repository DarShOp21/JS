function table(num){
    for(var i = 1; i <= 10; i++){
        pro = num * i;
        console.log(pro);
    }
}

table(5)


function table2(num){
    console.log("\nTable of ",num );
    for(var i= num ; i <= num*10 ; i += num){
        console.log(i);
    }
}

table2(11);