// some() মেথডটি একটি ফাংশন প্রয়োগ করে অ্যারেটির অন্তত একটির জন্য true রিটার্ন করলে true রিটার্ন করে। যদি কোন উপাদান শর্ত পূরণ না করে, তবে এটি false রিটার্ন করে।////////

const numbers = [1, 2, 3, 4, 5];

// ৩ এর চেয়ে বড় কোন সংখ্যা আছে কিনা পরীক্ষা করা
const hasGreaterThanThree = numbers.some((num) => num > 3);

console.log(hasGreaterThanThree); // Output: true

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

// ১৮ বছরের নিচে কোন ব্যবহারকারী আছে কিনা পরীক্ষা করা
const hasUnderage = users.some((user) => user.age < 18);

console.log(hasUnderage); // Output: false

const classes = ["Math", "Science", "History", "Art"];

// "Math" ক্লাস আছে কিনা পরীক্ষা করা
const hasMathClass = classes.some((className) => className === "Math");

console.log(hasMathClass); // Output: true

const names = ["Alice", "Bob", "Charlie", "Dave"];

// কোন নাম ৫ অক্ষরের বেশি আছে কিনা পরীক্ষা করা
const hasLongName = names.some((name) => name.length > 5);

console.log(hasLongName); // Output: false

// how to every user kore kag korbo  ///////////////

// every() মেথডটি একটি ফাংশন প্রয়োগ করে এবং সমস্ত উপাদান শর্ত পূরণ করলে true রিটার্ন করে। যদি কোনো উপাদান শর্ত পূরণ না করে, তবে এটি false রিটার্ন করে।

const numbers = [1, 2, 3, 4, 5];

// সব সংখ্যা ৫ এর চেয়ে কম কিনা পরীক্ষা করা
const allLessThanFive = numbers.every((num) => num < 5);

console.log(allLessThanFive); // Output: false

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Charlie", age: 30 },
];

// সকল ব্যবহারকারীর বয়স ১৮ বছরের বেশি কিনা পরীক্ষা করা
const allAdults = users.every((user) => user.age > 18);

console.log(allAdults); // Output: true

const classes = ["Math", "Science", "History", "Art"];

// সব ক্লাসের নাম ৪ অক্ষরের কম কিনা পরীক্ষা করা
const allShortClasses = classes.every((className) => className.length < 4);

console.log(allShortClasses); // Output: false

const names = ["Alice", "Bob", "Charlie", "Dave"];

// সব নামের দৈর্ঘ্য ১০ অক্ষরের কম কিনা পরীক্ষা করা
const allShortNames = names.every((name) => name.length < 10);

console.log(allShortNames); // Output: true
