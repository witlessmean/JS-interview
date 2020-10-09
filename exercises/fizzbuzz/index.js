// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(i = 1; i <= n; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz")
        }else if(i % 3 === 0){
            console.log("fizz")
        }else if(i % 5 === 0){
            console.log("buzz")
        }else{
            console.log(i)
        }
    }
}

module.exports = fizzBuzz;







//be sure to pay attention to the directions, as always. We are used to constantly writing 'i = 0' in for loops, but the directions specifically say that we want to start from the number '1'. 

//To do this problem we will employ the modulo operator. The modulo operator is used to find the remainder of two values. So if we say 10 % 9, we will get 1. If we want to get the answer 0, then we must use a multiple of 10. For example, the number 2 will divide into 10 and leave no remainders. Therefore, the remainder will be 0 and the answer will be 0. So in order to find multiples, those numbers divided into another number must result in the remainder 0 when using the modulo operator. With this knowledge, the above code should be simplified and make sense with just a few easily read if statements as we loop through an array and console.log every number. 
