// sort kag holo array k sajano ////////////

const numbers = [5, 2, 8, 1, 4];

// সংখ্যা সাজানো
numbers.sort();

console.log(numbers); // Output: [1, 2, 4, 5, 8]

const numbers = [5, 2, 8, 1, 4];

// সংখ্যা সাজানোর জন্য কাস্টম ফাংশন ব্যবহার
numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 4, 5, 8]

const fruits = ["banana", "apple", "orange", "mango"];

// স্ট্রিং সাজানো
fruits.sort();

console.log(fruits); // Output: ["apple", "banana", "mango", "orange"]

const fruits = ["banana", "apple", "orange", "mango"];

// অবনমিত সাজানো
fruits.sort((a, b) => b.localeCompare(a));

console.log(fruits); // Output: ["orange", "mango", "banana", "apple"]

const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 95 },
];

// গ্রেড অনুসারে সাজানো
students.sort((a, b) => b.grade - a.grade);

console.log(students);
/* Output:
    [
        { name: "Charlie", grade: 95 },
        { name: "Alice", grade: 90 },
        { name: "Bob", grade: 85 }
    ]
    */

const items = [
  { name: "item1", quantity: 10 },
  { name: "item2", quantity: 5 },
  { name: "item3", quantity: 20 },
  { name: "item4", quantity: 15 },
];

// পরিমাণ 10 এর উপরে ফিল্টার এবং নাম অনুযায়ী সাজানো
const sortedItems = items
  .filter((item) => item.quantity > 10)
  .sort((a, b) => a.name.localeCompare(b.name));

console.log(sortedItems);
/* Output:
    [
        { name: "item3", quantity: 20 },
        { name: "item4", quantity: 15 }
    ]
    */
