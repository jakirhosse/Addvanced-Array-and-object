const fruits = ["apple", "banana", "orange", "mango", "grape"];

// 1 থেকে 3 (৩ এর পূর্ব পর্যন্ত) ইনডেক্সের মধ্যে অংশ বের করা
const slicedFruits = fruits.slice(1, 3);

console.log(slicedFruits); // Output: ["banana", "orange"]
console.log(fruits); // Output: ["apple", "banana", "orange", "mango", "grape"] (মূল অ্যারে অপরিবর্তিত)

const text = "JavaScript is awesome!";

// 0 থেকে 10 (১০ এর পূর্ব পর্যন্ত) অংশ বের করা
const slicedText = text.slice(0, 10);

console.log(slicedText); // Output: "JavaScript"
console.log(text); // Output: "JavaScript is awesome!" (মূল স্ট্রিং অপরিবর্তিত)

const animals = ["dog", "cat", "rabbit", "hamster", "parrot"];

// 1 থেকে 4 (৪ এর পূর্ব পর্যন্ত) ইনডেক্সের মধ্যে অংশ বের করা
const slicedAnimals = animals.slice(1, 4);

console.log(slicedAnimals); // Output: ["cat", "rabbit", "hamster"]
console.log(animals); // Output: ["dog", "cat", "rabbit", "hamster", "parrot"] (মূল অ্যারে অপরিবর্তিত)

const quote =
  "The only limit to our realization of tomorrow is our doubts of today.";

// 4 থেকে 19 (১৯ এর পূর্ব পর্যন্ত) অংশ বের করা
const slicedQuote = quote.slice(4, 19);

console.log(slicedQuote); // Output: "only limit to our"
console.log(quote); // Output: "The only limit to our realization of tomorrow is our doubts of today." (মূল স্ট্রিং অপরিবর্তিত)

const message = "Learning JavaScript is fun!";

// শেষ 4 টি অক্ষর বের করা
const lastFourChars = message.slice(-4);

console.log(lastFourChars); // Output: "fun!"
console.log(message); // Output: "Learning JavaScript is fun!" (মূল স্ট্রিং অপরিবর্তিত)

// splice ///////////////////////

const colors = ["red", "green", "blue", "yellow"];

// ইনডেক্স 1 থেকে 1টি উপাদান মুছে ফেলা
const removedColors = colors.splice(1, 1);

console.log(removedColors); // Output: ["green"]
console.log(colors); // Output: ["red", "blue", "yellow"] (মূল অ্যারে পরিবর্তিত)

const numbers = [1, 2, 3, 5];

// ইনডেক্স 3 এ 4 যুক্ত করা
numbers.splice(3, 0, 4);

console.log(numbers); // Output: [1, 2, 3, 4, 5] (মূল অ্যারে পরিবর্তিত)

const colors = ["red", "green", "blue", "yellow", "purple"];

// ইনডেক্স 1 থেকে 2টি উপাদান মুছে ফেলা
const removedColors = colors.splice(1, 2);

console.log(removedColors); // Output: ["green", "blue"]
console.log(colors); // Output: ["red", "yellow", "purple"] (মূল অ্যারে পরিবর্তিত)
