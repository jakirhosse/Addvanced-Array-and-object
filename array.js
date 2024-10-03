// mappp////////////////
const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
];

const updatedUsers = users.map((user) => ({
  ...user,
  age: user.age + 5, // ৫ বছর যোগ করা হচ্ছে
}));

console.log(updatedUsers);
// Output: [{ name: "Jakir", age: 30 }, { name: "Hossain", age: 35 }, { name: "Rahim", age: 40 }]

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
];

const nameLengths = users.map((user) => ({
  name: user.name,
  length: user.name.length, // নামের দৈর্ঘ্য বের করা হচ্ছে
}));

console.log(nameLengths);
// Output: [{ name: "Jakir", length: 5 }, { name: "Hossain", length: 7 }, { name: "Rahim", length: 5 }]

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
];

const productNames = products.map((product) => product.name.toUpperCase()); // সব নাম বড় হাতের অক্ষরে

console.log(productNames); // Output: ["LAPTOP", "PHONE", "TABLET"]

//       filter //////////////////////

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
  { name: "Sakib", age: 28 },
];

const filteredUsers = users.filter((user) => user.age >= 30); // ৩০ বা তার বেশি বয়সের ব্যবহারকারীরা

console.log(filteredUsers);
// Output: [{ name: "Hossain", age: 30 }, { name: "Rahim", age: 35 }]

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Monitor", price: 200 },
];

const expensiveProducts = products.filter((product) => product.price > 500); // দাম ৫০০ এর বেশি

console.log(expensiveProducts);
// Output: [{ id: 1, name: "Laptop", price: 1200 }, { id: 2, name: "Phone", price: 600 }]

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
const vowels = letters.filter((letter) =>
  ["a", "e", "i", "o", "u"].includes(letter)
); // স্বরবর্ণ ফিল্টার করা হচ্ছে

console.log(vowels); // Output: ["a", "e"]

// and find //////////////

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
  { name: "Sakib", age: 28 },
];

const foundUser = users.find((user) => user.age === 28); // বয়স ২৮ এর ব্যবহারকারী

console.log(foundUser); // Output: { name: "Sakib", age: 28 }

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
  { id: 4, name: "Monitor", price: 200 },
];

const cheapProduct = products.find((product) => product.price < 500); // দাম ৫০০ এর নিচে

console.log(cheapProduct); // Output: { id: 4, name: "Monitor", price: 200 }

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
  { name: "Rahim", age: 28 },
];

const rahimUser = users.find((user) => user.name === "Rahim"); // প্রথম "Rahim" নামের ব্যবহারকারী

console.log(rahimUser); // Output: { name: "Rahim", age: 35 }

//       forreach  /////////////////

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
  { name: "Sakib", age: 28 },
];

users.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old.`);
});

// Output:
// Jakir is 25 years old.
// Hossain is 30 years old.
// Rahim is 35 years old.
// Sakib is 28 years old.

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
];

products.forEach((product) => {
  console.log(`${product.name} costs $${product.price}.`);
});

// Output:
// Laptop costs $1200.
// Phone costs $600.
// Tablet costs $300.

const text = "Hello World!";
text.split("").forEach((char) => {
  console.log(char);
});

// Output:
// H
// e
// l
// l
// o
// !
