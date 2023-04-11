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

function arraySum(arr){
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum); 
}

const numbers = [1, 2, 3, 4, 5];
arraySum(numbers);





// 3- Reverse a String:
let str1 = "Hind Saed Hudeib";
function reverseString(str){
    if( str === ""){
        return 0 ;
    }
     else{
        for(let i = str.length -1 ; i >= 0 ; i--){
            return str[i] + reverseString(str.slice(0, i));
        }
     }
}
reverseString(str1);