// Find the Largest Number

// Write a function that takes an array of numbers as input and returns the largest number in the array.

function findLargestNumber(numbers) {
    return Math.max(...numbers);
  }

console.log(findLargestNumber([1, 3, 5, 2, 4])); // Output: 5
console.log(findLargestNumber([-1, -10, 0, 7])); // Output: 7


// FizzBuzz

// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
 
  fizzBuzz();
  // Output:
  // 1
  // 2
  // Fizz
  // 4
  // Buzz
  // Fizz
  // 7
  // 8
  // Fizz
  // Buzz
  // 11
  // Fizz
  // 13
  // 14
  // FizzBuzz
  // ...
  // 98
  // Fizz
  // Buzz
  
  
// Reverse a String

// Write a function that takes a string as input and returns the reversed version of that string.

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
console.log(reverseString('hello')); // Output: 'olleh'

  