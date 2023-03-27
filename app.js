// 1-Fibonacci Series:
function fibonacci(num) {
    if (num <= 1) {
      return num;
    } else {
      return fibonacci(num - 1) + fibonacci(num - 2);
    }
  }
  
  function printFibonacci(num) {
    for (let i = 0; i < num; i++) {
      console.log(fibonacci(i));
    }
  }
  
  printFibonacci(10);




// 2- The sum of Array Elements:

let array = [1,2,3,4];


    function sum(array, n) {
        n ||= 0;  //It means if n variable is not defined or its not numeric then assign 0 to the n variable.
        if (n === array.length) {
            return 0;
        } else {
            return array[n] + sum(array, n + 1);
        }
    }

    sum(array);




// 3- Reverse a String:
let str1 = "Hind Saed Hudeib";
function reverseString(str){
    if( str === ""){
        return 0 ;
    }
     else{
        for(let i = str.length -1 ; i >= 0 ; i--){
            return str[i] + reverseString(str.slice(0, -1));
        }
     }
}
reverseString(str1);