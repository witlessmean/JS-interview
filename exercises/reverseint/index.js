// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



//So we have to turn the integer into a string first with toString() and then treat it as a normal string. Reversing a normal string is simple, which is what we do below. However, 'n' could easily be negative. What would happen if we want to reverse the string -45? Well then it would turn into 54-. We don't want that, which is where the logic comes below. Remember, we are using if 'n' and not if 'numString' because we want to know whether or not our original NUMBER is negative or not. numString is actually a string representing a number at this point. If 'n' is negative, then AFTER we parseInt numString to turn it back into a number, we multiply that number by -1 ONLY IF 'n' was originally negative. That's because a negative times a negative equals a positive, and doing this will return us a positive number. Otherwise, we just return the positive number if n is positive. 

// function reverseInt(n) {
//     let numString = n.toString().split('').reverse().join('');
        
//     if(n < 0) {
//         return parseInt(numString) * -1; 
//     } else {
//             return parseInt(numString)
//      } 
       
//         }

//module.exports = reverseInt;

//Solution 2
//instead of all that messy 'if' logic, we can use 'Math.sign'. If we pass math.sign a positive number, it will return 1, and if we pass it a negative number, it will return negative 1. So therefore, we can just pass 'n' to it in order to check to see whether or not 'n' is negative or positive. 

function reverseInt(n) {
         let numString = n.toString().split('').reverse().join('');
       return parseInt(numString) * Math.sign(n)     
}

module.exports = reverseInt;

