// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//*******************************************************//

//string reversal 

//First Solution

// My own first solotion. First, we use split, which places the separated characters of the string into an array. Then we reverse each individual character inside of that array by manipulating it with reverse. Then we join the characters back together with join, which gives us a string back out of the array with the concatinated string. We give join the argument of (''), as you can see. See also the 'concat' method for this. Note, split also takes the '' argument and has a good example of usage on w3schools. 


// function reverse(str) {
//     splitString = str.split('').reverse().join('');
//         return splitString
// }

// module.exports = reverse;

//Second solution

//so what if we didn't use the reverse function? The interviewer may want us to use another way to come up with our answer. Because initially I was confused about this answer, the question I had searched for was answered inside the Udemy Q@A. Remember, we aren't saying reversedString plus character, we are saying character plus REVERSESTRING. And so at the first iteration, character will be a. Then the second time around, we are saying character, which will now be p, plus reversedString, which is now a. So mathematically we are saying p plus a with will equal pa. And this will continue until the entire string is reversed. 

// Aah, I got it.  e.g str = "apple";

// Iteration#1 :

// reversed = a+"" = a;

// Iteration#2 : 

// reversed = p+a= pa;

// Iteration#3:

// reversed = p +pa = ppa;

// Iteration#4:

// reversed = l+ppa = lppa;

// Iteration#5:

// reversed = e+lppa = elppa;

// function reverse(str) {
//     let reversedString = '';
//         for(let character of str) { 
//             reversedString = character + reversedString;
//         }
//                 return reversedString;
// }

// module.exports = reverse;


//Third solution. 
//A more complicated solution than the first two, but it really will show the interviewer that we understand advanced ways of how to reverse a string. We use the reduce method here. There are two return statements because a function must always return something and we have two functions here. 

//iteration 1: acc adds "" to cv;
//iteration 2: acc adds a to "", making a;
//iteration 3: acc gets p passed to it, and cv is p. Then do cv(p), plus acc(a). What's p plus a? 'pa'. We continue this until we have apple reversed. 

function reverse(str) {
    return str.split('').reduce((acc, cv, index, array) => {
      return cv + acc; 
    }, '');
  }

  module.exports = reverse;

  