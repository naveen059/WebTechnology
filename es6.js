// es6-features.js: Comprehensive ES6 Features Guide

// 1. Let and Const
const CONSTANT_VALUE = 100;  // Cannot be reassigned
let changingValue = 200;     // Block-scoped variable

// 2. Arrow Functions
// Traditional function
const traditionalAdd = function(a, b) {
    return a + b;
};

// Arrow function equivalent
const arrowAdd = (a, b) => a + b;

// Arrow function with single parameter
const square = x => x * x;

// Arrow function with no parameters
const sayHello = () => console.log('Hello!');

// 3. Template Literals
const name = 'John';
const greeting = `Hello, ${name}!
This is a multiline
template literal.`;

// 4. Destructuring Assignment
// Array Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object Destructuring
const person = { 
    firstName: 'John', 
    lastName: 'Doe', 
    age: 30 
};
const { firstName, lastName } = person;

// 5. Spread and Rest Operators
// Spread Operator
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

// Rest Parameters
const sumAll = (...args) => {
    return args.reduce((sum, current) => sum + current, 0);
};

// 6. Default Parameters
const greet = (name = 'Guest', greeting = 'Hello') => {
    return `${greeting}, ${name}!`;
};

// 7. Enhanced Object Literals
const username = 'johndoe';
const createUser = (name, age) => {
    return {
        // Shorthand property names
        name,
        age,
        
        // Method shorthand
        sayHi() {
            return `Hi, I'm ${this.name}`;
        }
    };
};

// 8. Classes
class Person {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    introduce() {
        return `Hi, I'm ${this.name}`;
    }

    // Static method
    static create(name, age) {
        return new Person(name, age);
    }
}

// Inheritance
class Employee extends Person {
    constructor(name, age, role) {
        super(name, age);
        this.role = role;
    }

    // Method overriding
    introduce() {
        return `${super.introduce()} and I work as a ${this.role}`;
    }
}

// 9. Promises
const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        // Simulated async operation
        setTimeout(() => {
            const data = { id: 1, name: 'Sample Data' };
            resolve(data);
        }, 1000);
    });
};

// 10. Modules (ES6 Module Syntax)
// Export
export const PI = 3.14159;
export const calculateCircleArea = (radius) => PI * radius * radius;


// 13. Map and Set
const map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

const set = new Set([1, 2, 3, 4, 5]);



// Safely access nested properties
const city = user?.details?.address?.city ?? 'Unknown';

// 15. Object Methods
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Object.assign() for merging
const mergedObj = Object.assign({}, obj1, obj2);

// Object.entries(), Object.keys(), Object.values()
const entries = Object.entries(person);
const keys = Object.keys(person);
const values = Object.values(person);

// Practical Example: Combining Multiple ES6 Features
const processUsers = (users) => {
    return users
        .filter(user => user.age >= 18)
        .map(user => ({
            ...user,
            fullName: `${user.firstName} ${user.lastName}`
        }))
        .sort((a, b) => a.age - b.age);
};