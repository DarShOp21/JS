 //it  gives only two values either true or false
 //It gives true when all the elements in an array satifies the conditionnit satisfies

  let arr = [1 , 2, 3, 4, 5];

  let isAllEven = arr.every((el) => (el % 2 == 0));
  let isAllGreaterThan0 = arr.every((el) => (el > 0));
  console.log(`all elements of arr are even : ${isAllEven}`);
  console.log(`all elements of arr are greater than 0 : ${isAllGreaterThan0}`);