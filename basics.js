// JAVASCRIPT CONCEPTS
// 1. Variables and Data Types
let name = "John Doe";         // string
const age = 30;                // number
let isStudent = true;          // boolean
let data = null;               // null
let undefined_var;             // undefined

// 2. Arrays
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");           // Add element
fruits.pop();                  // Remove last element
fruits.unshift("pineapple")    // Add element at the beginning
fruits.shift();                // Remove first element
console.log(fruits.length);    // Array length

// 3. Objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, ${this.firstName}!`;
    }
};

// 4. Functions
function addNumbers(a, b) {
    return a + b;
}

//self-invoking functions
(function() {
    console.log("This function calls itself")
})();

// Arrow Function
const multiply = (a, b) => a * b;

// 5. Conditional Statements
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";

// 6. Loops
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// ForEach
fruits.forEach(fruit => {
    console.log(fruit);
});

//for of
let obj = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    greet: function() {
        return `Hello, ${this.firstName}!`;
    }
};

for(let key of obj){
    console.log(`keys = ${key} and values = ${obj}`)
}

//for in


// 7. Promises
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        resolve(data);
    }, 2000);
});

fetchData
    .then(data => console.log(data))
    .catch(error => console.error(error));

// 8. Async/Await
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 9. Destructuring
const { firstName, lastName } = person;

// 10. Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// 11. Map and Filter
const doubledNumbers = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);