const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// দুটি অ্যারে একত্রিত করা
const combinedArray = array1.concat(array2);

console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

const fruits1 = ["apple", "banana"];
const fruits2 = ["orange", "mango"];
const fruits3 = ["grape", "pineapple"];

// তিনটি অ্যারে একত্রিত করা
const allFruits = fruits1.concat(fruits2, fruits3);

console.log(allFruits); // Output: ["apple", "banana", "orange", "mango", "grape", "pineapple"]

const numbers = [1, 2, 3];

// একাধিক উপাদান যুক্ত করা
const extendedNumbers = numbers.concat(4, 5, [6, 7]);

console.log(extendedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7]
