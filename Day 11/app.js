// Day 11 of 30

// Original array of numbers
const numbers = [1, 2, 3, 4, 5];

// Map: Multiply each number by 2
const mappedNumbers = numbers.map((number) => number * 2);

// Filter: Keep only even numbers
const filteredNumbers = mappedNumbers.filter((number) => number % 2 === 0);

// Chaining: Mapping and filtering in a single chain
const result = numbers.map((number) => number * 2).filter((number) => number % 2 === 0);

console.log(mappedNumbers);   // Output: [2, 4, 6, 8, 10]
console.log(filteredNumbers); // Output: [2, 4, 6, 8, 10]
console.log(result);          // Output: [2, 4, 6, 8, 10]
