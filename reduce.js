const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
];

const totalPrice = products.reduce(
  (accumulator, product) => accumulator + product.price,
  0
);

console.log(totalPrice); // Output: 2100

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
];

const ageSummary = users.reduce(
  (accumulator, user) => {
    accumulator.totalAge += user.age; // মোট বয়স যোগ করা
    accumulator.count += 1; // ব্যবহারকারীর সংখ্যা বাড়ানো
    return accumulator;
  },
  { totalAge: 0, count: 0 }
);

console.log(ageSummary); // Output: { totalAge: 90, count: 3 }

const users = [
  { name: "Jakir", age: 25 },
  { name: "Hossain", age: 30 },
  { name: "Rahim", age: 35 },
  { name: "Sakib", age: 28 },
];

const ageCount = users.reduce((accumulator, user) => {
  if (user.age >= 30) {
    accumulator["30+"] = (accumulator["30+"] || 0) + 1; // ৩০ এর বেশি বয়সের সংখ্যা
  } else {
    accumulator["<30"] = (accumulator["<30"] || 0) + 1; // ৩০ এর কম বয়সের সংখ্যা
  }
  return accumulator;
}, {});

console.log(ageCount); // Output: { "30+": 2, "<30": 2 }

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
];

const maxPriceProduct = products.reduce((max, product) =>
  product.price > max.price ? product : max
);

console.log(maxPriceProduct); // Output: { id: 1, name: "Laptop", price: 1200 }

const text = "Hello world, this is a simple test. Hello again!";
const words = text.split(/\W+/); // স্ট্রিং থেকে শব্দগুলো আলাদা করা

const wordCount = words.reduce((accumulator, word) => {
  word = word.toLowerCase(); // ছোট হাতের অক্ষরে রূপান্তর
  accumulator[word] = (accumulator[word] || 0) + 1; // প্রতিটি শব্দের সংখ্যা গোনা
  return accumulator;
}, {});

console.log(wordCount);
// Output: { hello: 2, world: 1, this: 1, is: 1, a: 1, simple: 1, test: 1, again: 1 }

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 600 },
  { id: 3, name: "Tablet", price: 300 },
];

const { totalPrice, count } = products.reduce(
  (accumulator, product) => {
    accumulator.totalPrice += product.price; // মোট দাম যোগ করা
    accumulator.count += 1; // মোট পণ্যের সংখ্যা
    return accumulator;
  },
  { totalPrice: 0, count: 0 }
);

const averagePrice = totalPrice / count;

console.log(averagePrice); // Output: 700
