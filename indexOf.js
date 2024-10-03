// indexOf() মেথডটি একটি অ্যারেতে একটি নির্দিষ্ট উপাদানের প্রথম উপস্থিতির ইনডেক্স (index) খুঁজে বের করার জন্য ব্যবহৃত হয়। যদি উপাদানটি অ্যারেতে না পাওয়া যায়, তবে এটি -1 রিটার্ন করে।/////

const fruits = ["apple", "banana", "orange", "mango"];

// "banana" এর ইনডেক্স খুঁজে বের করা
const index = fruits.indexOf("banana");

console.log(index); // Output: 1

const colors = ["red", "green", "blue"];

// "yellow" এর ইনডেক্স খুঁজে বের করা
const index = colors.indexOf("yellow");

console.log(index); // Output: -1

const animals = ["cat", "dog", "bird", "dog", "fish"];

// প্রথম "dog" এর ইনডেক্স খুঁজে বের করা
const firstIndex = animals.indexOf("dog");

console.log(firstIndex); // Output: 1

const numbers = [10, 20, 30, 40, 50, 20];

// 20 এর ইনডেক্স খুঁজে বের করা, প্রথম 20 এর পর থেকে
const indexFromSecondOccurrence = numbers.indexOf(20, 3);

console.log(indexFromSecondOccurrence); // Output: -1

const items = ["apple", "banana", "orange", "banana", "grape"];

// কাস্টম ফাংশন ব্যবহার করে ইনডেক্স খুঁজে বের করা
function findIndex(array, element) {
  const index = array.indexOf(element);
  if (index === -1) {
    console.log(`${element} not found in array.`);
  }
  return index;
}

// "banana" এবং "kiwi" এর ইনডেক্স খুঁজে বের করা
console.log(findIndex(items, "banana")); // Output: 1
console.log(findIndex(items, "kiwi")); // Output: kiwi not found in array. \n -1

// and indexof sorasori objects sate kag kore na //////

//   how to findIndex  use ////////////////

const students = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

// অবজেক্টের ইনডেক্স খুঁজে বের করা
const studentNameToFind = "Bob";
const index = students.findIndex(
  (student) => student.name === studentNameToFind
);

console.log(index); // Output: 1

const numbers = [10, 20, 30, 40, 50];

// 30 এর ইনডেক্স খুঁজে বের করা
const index = numbers.findIndex((num) => num === 30);

console.log(index); // Output: 2

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Tablet", price: 300 },
];

// Price 500 এর ইনডেক্স খুঁজে বের করা
const index = products.findIndex((product) => product.price === 500);

console.log(index); // Output: 1

const colors = ["red", "green", "blue"];

// "yellow" এর ইনডেক্স খুঁজে বের করা
const index = colors.findIndex((color) => color === "yellow");

console.log(index); // Output: -1
