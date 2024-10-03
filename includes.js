// স্ট্রিংয়ের মধ্যে একটি সাবস্ট্রিং উপস্থিত কিনা তা যাচাই করতে includes() ব্যবহার করা হয়।

const message = "Hello, world!";
const containsHello = message.includes("Hello");
const containsGoodbye = message.includes("Goodbye");

console.log(containsHello); // Output: true
console.log(containsGoodbye); // Output: false

const sentence = "JavaScript is a versatile programming language.";

const hasVersatile = sentence.includes("versatile");
const hasPython = sentence.includes("Python");

console.log(hasVersatile); // Output: true
console.log(hasPython); // Output: false

const greeting = "Welcome to the World of JavaScript!";

const hasWelcome = greeting.includes("welcome"); // ছোট হাতের 'w'
const hasWorld = greeting.includes("World"); // বড় হাতের 'W'

console.log(hasWelcome); // Output: false
console.log(hasWorld); // Output: true

// অ্যারেতে একটি নির্দিষ্ট উপাদান আছে কিনা তা পরীক্ষা করতে includes() ব্যবহার করা হয়।//////////

const fruits = ["apple", "banana", "orange", "mango"];

const hasBanana = fruits.includes("banana");
const hasGrapes = fruits.includes("grapes");

console.log(hasBanana); // Output: true
console.log(hasGrapes); // Output: false

const colors = ["red", "green", "blue", "yellow"];

const hasRed = colors.includes("red");
const hasPink = colors.includes("pink");

console.log(hasRed); // Output: true
console.log(hasPink); // Output: false

const colors = ["red", "green", "blue", "yellow"];

const hasRed = colors.includes("red");
const hasPink = colors.includes("pink");

console.log(hasRed); // Output: true
console.log(hasPink); // Output: false
