// VARIABLES

const browserName: string = "Brave";
console.log(browserName);

// browserName = "Chrome"; // ERROR - NOT ALLOWED - const variable cannot be reassigned
// console.log(browserName);

console.log(typeof browserName);

let url: string = "https://www.example.com";
console.log(url);

url = "https://www.newexample.com";
console.log(url);

// ****************************************************************************************************

// DATATYPES
let title: string = `backtick string`;
console.log(title);

let title1: string = "double quote string";
console.log(title1);

let snumber: number = 45;
console.log(snumber);

let isActive: boolean = true;
console.log(isActive);

let arr: (string | number | boolean)[] = ["apple", "car", 34, false];
console.log(arr);
console.log(arr[0]);

// ****************************************************************************************************

// OBJECTS

let person: {
  name: string;
  id: number;
  company: string;
  isActive: boolean;
  address: {
    city: string;
    state: string;
  };
} = {
  name: "John",
  id: 2,
  company: "ABC",
  isActive: true,
  address: {
    city: "New York",
    state: "NY",
  },
};

console.log(person);
console.log(person.name);
console.log(person.address.city);

// ****************************************************************************************************

// FUNCTIONS

function sayHello(name: string): void {
  console.log(`Hello ${name}`);
  console.log("Hello" + name);
}

sayHello("John");

// ARROW FUNCTIONS

const arrowFunction = (company: string, pincode: number): void => {
  console.log(`Hello from arrow function, ${company} with pincode ${pincode}`);
};

arrowFunction("abc", 123);

// RETURN ARROW FUNCTION

const returnArrowFunc = (age: number): number => {
  return age;
};

console.log(returnArrowFunc(22));

// ****************************************************************************************************

// ARITHMATIC OPERATOR

console.log(5 + 3); // Addition
console.log(5 - 3); // Subtraction
console.log(5 * 3); // Multiplication
console.log(5 / 3); // Division
console.log(5 % 3); // Modulus
console.log(5 ** 3); // Exponentiation

// ****************************************************************************************************

// COMPARISON OPERATOR

console.log(5 == 3); // Equal to
console.log(5 != 3); // Not equal to
console.log(5 === 3); // Strict equal to
console.log(5 !== 3); // Strict not equal to
console.log(5 > 3); // Greater than
console.log(5 < 3); // Less than
console.log(5 >= 3); // Greater than or equal to
console.log(5 <= 3); // Less than or equal to

console.log(5 == "5"); // Equal to
console.log(5 === "5"); // Equal to

// ****************************************************************************************************

// LOGICAL OPERATOR

console.log(true && true); // AND
console.log(5 === "5" && 5 == "5");
console.log(5 === "5" || 5 == "5");
console.log(44 === 3 || 4 > 2);
console.log(!true); // NOT
console.log(!(3 === 3));

// ****************************************************************************************************

// CONDITIONAL STATEMENTS

let age: number = 18;

if (age >= 18) {
  console.log("You are eligible to vote");
} else if (age >= 16) {
  console.log("You are eligible to drive");
} else {
  console.log("You are not eligible to vote or drive");
}

// ****************************************************************************************************

// LOOPS

for (let i: number = 0; i <= 10; i++) {
  console.log(i);
}

let values: (string | number | boolean)[] = ["abc", 123, true, "xyz", 456];

for (const value of values) {
  console.log(value);
}

for (let i: number = 0; i <= values.length; i++) {
  console.log(values[i]);
}

// ****************************************************************************************************

// Async -> mark a function as Asynchronous, (meaning it may take time to complete) which means it will return a promise and can be used with await
// Await -> Pauses execution until the task finishes before moving to the next step

// Importance -> Ensures steps execute in a correct order and prevents unstable and unpredictable behavior
// important for automation

async function loadData(): Promise<void> {
  await fetch("https://example.com");
}

// ****************************************************************************************************

// Classes are used to group related actions together in one place
// They help organize code and improve structure and readability
// In automation, classes are commonly used to represent pages or modules

// Methods

// Methods are functions defined inside a class and can be called on instances of the class
// They perform specific actions related to that class

// Objects & Method Calling
// Obj are instances created from classes
// They allow access to the class methods
// Methods are called using the dot operator

// Constructor -> The constructor runs automatically when an object is created from a class. It is used to initialize or setup initial values

class LoginPage {
  age: number;
  company: string;

  constructor(company?: string) {
    console.log("Constructor calling");
    this.age = 18;
    this.company = company ?? "";
  }

  login(): void {
    console.log("Login method calling");
  }
}

const loginObj = new LoginPage(); // default constructor calling
loginObj.login();
console.log(loginObj.age);

const loginObj2 = new LoginPage("Net"); // parameterized constructor calling
loginObj2.login();
console.log(loginObj2.company);

// ****************************************************************************************************

// Import & Export

// Import -> Used to bring in code from other files or modules into the current file
// Export -> Used to make code available for use in other files or modules
