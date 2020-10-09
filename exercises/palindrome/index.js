// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


//remember, we can reverse this any of the other ways we learned how to reverse strings

//my first solution. If the string is === to str even after we reverse it, then it is a palindrome. We will return true if it is a palindrome, and false if it isn't. not sure if you can do this with a ternary considering the fact that the ternary operation is looking for true or false already.  
// function palindrome(str) {
//   const splitString = str.split("").reverse().join("");

//   if (splitString === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

//module.exports = palindrome;

//First solution by Stephen:
// if we say something like 'return str === splitString', split string is either equal to str or it isn't. It is or it isn't. True or False. So what will return then is true or false from this return statement. 

// function palindrome(str) {
//     const splitString = str.split("").reverse().join("");

//     return str === splitString
// }

// module.exports = palindrome;

//Second harder solution by Stephen. 
//The 'every' method is used to do a boolean check on every item inside the array. It takes a callback which can take the value of that item as it iterates through the array as an argument. so for example: array.every((value) => value > 5). So this function will check to see if the value of the item of the array is greater than 5. If any number is less than 5, the whole function will return false because every value needs to return greater than 5 in order for the function to yield true.  

//So, we will compare parts of the array with the every function. 
//                      Lets say we have:
//                          a b c b a
// With every, in order to check to see if we have a palindrome, first we will compare the first letter to the last letter. Then we will compare the second letter to the second last letter and so on. If the first letter a isn't equal to the last letter, the function will return false. Otherwise, it will keep going as long as the characters are equal. Now, this is a little overkill and we should acknowledge that. The reason is because after c (which will compare with itself), it is redundant to then compare the final b to be again and the final a to a again considering the fact that we already did that the first time around. 

//Because we want to compare each element to what should or could be its mirror on the other side of the array, we have to figure out some way that we can reach that element on the other side in order to compare the two. As the second argument to the 'every' method, we can receive the index. Because arrays start at the 0 index, an array of 'a b c b a' will have an index like so:  a b c b a 
//                                                   0 1 2 3 4 
//But those are only the indicies of the array. They have nothing to do with the length of the array, technically. So the length of the array is still 5 because there are 5 characters inside the array. Because we want the last element within the array, and because we use the index to do that, and because there are five elements in the array, we can't say 'look at the element at length', we have to say look at the element at length - 1, which will always bring us to the last index. This is important because the INDEX is what's being passed to us inside of the callback function, and we need a way to access the last index. If we say array.length, we aren't accessing the last index because array.length is == to 5 and we need a way to work with the last element by using it's index as a reference.  

// explanation of iteration process: 
//Let me explain this with an example. Lets say the array = [a, b, c, d, c, b, a]. Here array.length = 7.

// When i=0, we need to compare it to value at end of the array (i.e) at index 6 which is (array.length - 1) - 0.

// When i=1, compare it to value at index 5 which is (array.length - 1) - 1.

// Similarly, when i=2, compare it to value at index 4 which is (array.length - 1) - 2.

// You can observe a pattern of the index that needs to be compared with, which is (array.length - 1) - i.

//remember that 'index' is literally a number. 

function palindrome(str) {
   const answer = str.split('').every((character, index) => {
        return character === str[str.length - index - 1];
    });
    return answer
}

module.exports = palindrome 


//iteration 1: 
 
// a b b a 
// 0 1 2 3 

// is 'a' equal to 4 - 0 - 1, or is 'a' equal to index at the length of the array, which is 4, minus 0, minus 1, which puts us at the third indicy of the array. So because we need to use the index to compare and now we are at the third index, this is how we will get to the end of the array every iteration. 

//iteration 2: 

//  a b b a 
//  0 1 2 3 

//is 'b' equal to 4(the constant length of the array) - 1 (which is index, and index has changed to 1 from 0 because we are moving within the array from left to right), - 1. The legth will now start from the b and we will have to subtract twice? 