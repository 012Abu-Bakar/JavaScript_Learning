/ ** A beginner-friendly JavaScript learning repo for developers transitioning from Java or Python, moving from Selenium to Playwright, or brushing up on core concepts.

*/

// *************************************VARIABLES***************************************************************


// const browserName = "Brave"
// console.log(browserName);

// browserName = "Chrome"      //ERROR - NOT ALLOWED - const variable cannot be reassigned
// console.log(browserName);

// console.log(typeof browserName);

// let url = "https://www.example.com";
// console.log(url);

// url = "https://www.newexample.com";
// console.log(url);


// *************************************DATATYPES***************************************************************

// // DATATYPES
// let title = `backtick string`;
// console.log(title);

// let title1 = "double quote string";
// console.log(title1);

// let snumber = 45;
// console.log(snumber);

// let isActive = true;
// console.log(isActive);

// let arr = ['apple', 'car', 34, false];
// console.log(arr);
// console.log(arr[0]);



// **************************************OBJECTS**************************************************************


// let person = {
//     name: "John",
//     id: 2,
//     company: "ABC",
//     isActive: true,
//     address: {
//         city: "New York",
//         state: "NY"
//     }
// }
// console.log(person);
// console.log(person.name);
// console.log(person.address.city);



// ****************************************Arithmatic operator************************************************************



// console.log(5 + 3); // Addition
// console.log(5 - 3); // Subtraction
// console.log(5 * 3); // Multiplication
// console.log(5 / 3); // Division
// console.log(5 % 3); // Modulus
// console.log(5 ** 3); // Exponentiation



// *****************************************Exponential operator***********************************************************


// let x =2, y=3;
// let result = x ** y;
// console.log(result);


// ***************************************** Increment & Decrement***********************************************************


// let a=2;
// let b=2;
// let q = 2 * a++;
// let q1 = 2 * ++b;

// console.log(q);
// console.log(q1);

// let c=2;
// let d=2;
// let r = 2 * c--;
// let r1 = 2 * --d;

// console.log(r);
// console.log(r1);


// ******************************************Comparison operator**********************************************************



// console.log(5 == 3); // Equal to
// console.log(5 != 3); // Not equal to
// console.log(5 === 3); // Strict equal to (value + type)
// console.log(5 !== 3); // Strict not equal to
// console.log(5 > 3); // Greater than
// console.log(5 < 3); // Less than
// console.log(5 >= 3); // Greater than or equal to
// console.log(5 <= 3); // Less than or equal to

// console.log(5 == '5'); // Equal to
// console.log(5 === '5'); // Strict Equal to



// ***************************************** Ternary operator***********************************************************

/**
 * Ternary operator: if-then-else
 * takes 3 args
 * condition ? value if true : value if false
 */

// let a =2, b =3;
// let res = a >b ? console.log(true): console.log(false);
// // console.log(res);


// ***************************************Logical operator*************************************************************


// console.log(true && true); // AND
// console.log(5 === '5' && 5 == '5');
// console.log(5 === '5' ||  5 == '5');
// console.log(44===3 || 4>2)
// console.log(!true); // NOT 
// console.log(!(3===3))



// **************************************TYPE OPERATORS**************************************************************

// console.log(typeof 123);
// console.log(typeof 'acv');
// console.log(typeof false);
// console.log(typeof[1,2,'d']);  //obj
// console.log(typeof{name:'john', age:22}); //obj
// console.log(typeof new Date()); //obj
// console.log(typeof Date); //function


/**  Return TRUE if an object is an instance of an object type */

// // let name = 'john';
// let name = new String('John');
// console.log(name instanceof String);




// *****************************************Bitwise operator***********************************************************

/**
A = 1 --> 0001
B = 2 --> 0010
& ---> set each bit 1, if both bits are 1
| ---> set each bit 1, if one of two bits is 1
^ ---> set each bit to 1 if only one of two bits is 1
A & B = 0000 = 0
A | B = 0011 = 3
A=3, B=5
A ^ B = 0011 ^ 0101 = 0110 = 6

 */

// let A = 1, B = 2;
// let a = 3, b = 5;
// console.log(A & B);
// console.log(A | B);
// console.log(a ^ b);

/**  
~ NOT(Unary operator -> works with single operand) ---> inverts all bits
~5 = 0101 = 0000 0101 = 1111 1010 = -6
*/

//console.log(~5);


/**
 * Left shift = << --> shifts left and fills empty space with zero
 * 5 << 1 = 0101 = 1010 = 10
 * Right shift = >> --> shifts right
 * 5 >> 1 = 0101 = 0010 = 2
 */

// console.log(5 << 1);
// console.log(5 >> 1);

// *****************************************Conditional Statements***********************************************************



// let age = 18;

// if( age >= 18){
//     console.log("You are eligible to vote");
// }else if(age >= 16){
//     console.log("You are eligible to drive");
// }else{
//     console.log("You are not eligible to vote or drive");
// }   



// ******************************************Switch case**********************************************************


// let rating = 6;

// switch(rating) {
//     case 1: 
//         console.log('very bad');
//         break;
//     case 2: 
//         console.log('bad');
//         break;
//     case 3: 
//         console.log('Average');
//         break;
//     case 4: 
//         console.log('Good');
//         break;    
//     case 5: 
//         console.log('Excellent');
//         break;
//     default:
//         console.log("Enter rating 1 to 5");    
// }



// ******************************************Loops**********************************************************



// // For Loop

// for(let i=0; i<=10; i++){
//     console.log(i);
// }


// let values = ["abc", 123, true, "xyz", 456];

//for-of loop
// for(value of values){
//     console.log(value);
// }

//for-in loop
// for(i in values){
//     console.log('value: '+ values[i]);
// }


// for(let i=0; i<=values.length;i ++) {
//     console.log(values[i]);
// }



// *************************************While and do while***************************************************************

// let counter = 1;
// let counterDo = 2;
// while(counter <=10){
//     console.log(counter);
//     counter++;
// }

// do {
//     console.log(counterDo);
//     counterDo++;
// }while(counterDo <= 10);




// ************************************Arrays***************************************************************

// let nums = [1,2,3,4,56];
// console.log(nums);

// let fru = ['apple','mango','banana'];
// console.log(fru);

// let cars = new Array('Ford', 'Toyota', 'Mercedes');
// console.log(cars);
// console.log(cars[2]);

// cars[2] = 'RR';
// console.log(cars[2]);
// console.log(cars);

// cars.push('Honda');
// console.log(cars);

// console.log(cars.length);

// for(let x in cars){
//     console.log(cars[x]);
// }

// for(let x of cars) {
//     console.log(x);
// }


// ************************************Arrays methods***************************************************************


// let fruits = ['apple', 'mango', 'guava'];
// console.log(fruits);

// fruits.pop(); //remove last element
// console.log(fruits);

// fruits.shift(); //remove fitst element
// console.log(fruits);

// fruits.push('cherry');
// console.log(fruits);

// fruits.unshift('grapes'); //add fruit at first position
// console.log(fruits);

// delete fruits[1]; // index will remain, item deleted
// console.log(fruits);

// fruits[1] = 'litchi';
// console.log(fruits);

// fruits.splice(1,2);
// console.log(fruits);

// fruits.splice(1,0,'Lemon', 'Orange'); // nothing to remove, and add Lemon, Orange
// console.log(fruits);

// let CitrusFruit = fruits.slice(1,fruits.length);
// console.log(CitrusFruit);

// let evenNum = [2,4,6];
// let oddNum = [1,3,5];
// let primNum = [2,3,5];
// let num = evenNum.concat(oddNum,primNum);

// console.log(num);




// **************************************FUNCTIONS**************************************************************



// function sayHello(name) {
//     console.log(`Hello ${name}`);
//     console.log("Hello" + name)
// }

// sayHello("John");


// // ARROW FUNCTIONS

//  const arrowFunction = (company,pincode) => {
//     console.log(`Hello from arrow function, ${company} with pincode ${pincode}`);
//  }

//  arrowFunction('abc',123);


//  // retrun ARROW FUNCTION

//  const returnArrowFunc = (age) =>{

//     // return console.log("returning value from arrow function age: "+age);

//     return age;
//  }

//  console.log(returnArrowFunc(22));



// *************************************Async & Await***************************************************************



// Async -> mark a function as Asynchronous, (meaning it may take time to complete) which means it will return a promise and can be used with await
// Await -> Pauses execution unitl the task finishes before moving to the next step

// Importance -> Ensures steps execute in a correct order and prevents unstable and unpredictable behavior
//important for automation


// async function loadData() {
//     await fetch("https://example.com");
// }




//**************************************OOPS Classes **************************************************************



//Classes are used to group related actions together in one place
//They help organize code and improve structure and readability
//In automation, classes are commanly used to represent pages or modules

//Methods

//Methods are functions defined inside a class and can be called on instances of the class
//They perform specific actions related to that class


//Objects & Method Calling
//Obj are instances  created from classes
//They allow access to the class methods
//Methods are called using the dot operator

//Constructor -> The constructor runs automatically when an object is created from a class. It is used to initialize or setup initial values


// class LoginPage{
    
//     constructor(company){
//         console.log("Constructor calling")
//         this.age = 18
//         this.company = company
//     }

//     login(){
//         console.log("Login method calling")
//     }
// }

// const loginObj = new LoginPage(); // default constructor calling
// loginObj.login();
// console.log(loginObj.age)


// const loginObj2 = new LoginPage("Net");  //parameterized constructor calling
// loginObj2.login();
// console.log(loginObj2.company)


//******************************************* Class & Object*********************************************************


// class Employee {

//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     // setDetails(name, id) {
//     //     this.name = name;
//     //     this.id = id;
//     // }
// }
// let emp1 = new Employee('John', 12);
// let emp2 = new Employee('Doe', 102);

// // emp1.setDetails('John', 12);
// console.log(emp1.name);
// console.log(emp1.id);

// console.log(emp2.name);
// console.log(emp2.id);



//*******************************************Encapsulation*********************************************************

/** A mechanism of restricting direct access to some of the object's mechanism 
 * A mechanism of bundling data with methods that operate on that data
 * Why: 
 * 1. Security - controlled access
 * 2. Hide implementation & expose behaviour
 * 3. Loose coupling - modify the implementation anytime
*/

// class Employee {

//     setDetails(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     getEmpName(){
//         return this.name;
//     }

//     getEmpId() {
//         return this.id;
//     }
// }

// let emp = new Employee();
// emp.setDetails('John', 32); 
// console.log(emp.getEmpName());
// console.log(emp.getEmpId());



//*******************************************Inheritance*********************************************************

/** 
 * Inheritence : where one class aquire properties of another class
 */


// class Car {

//     constructor (name){
//         this.name = name;
//     }
//     // setName(name) {

//     //     this.name = name;
//     // }

//     startEngine(){
//         console.log("Engine started for:"+this.name);
//     }

//     stopEngine() {
//         console.log("Engine stopped for: "+this.name);
//     }
// }

// class Toyota extends Car{

//     topSpeed(speed){
//         console.log("Top speed for " + this.name + " is: " +speed);
//     }
// }
// let car = new Toyota("Camry");
// // car.setName("Camry");
// car.startEngine(); car.stopEngine(); car.topSpeed('356KMH');



//*******************************************Ptototype*********************************************************

/** In JS, every function has a property called prototype 
 * by default this property is empty, but we can add peroperties and methods to it
*/

 /** We can create a constructor wihtout a class in JS
  * let myFun = function(){}
  */

//  let EmpDetails = function(name, id) {
//     this.name = name;
//     this.id = id;

//     this.getName = function() {
//         return this.name;
//     }

//     this.getId = function() {
//         return this.id;
//     }
//  };
//  let emp = new EmpDetails('Bruce', 22);
//  let emp2 = new EmpDetails('Lee', 22);
//  console.log(emp.getName()); console.log(emp.getId());


 /** Prototype based inheritance 
  * in above case, by default every obj by-default inherit all properties that may not needed
  * 
  * Suppose there is a func 'X' when you create snother func that is inherited from 'X', it will inherit the methods,
  * & properties defined in X's scope
  * 
 */

//   let EmpDetails = function(name, id) {
//     this.name = name;
//     this.id = id;

//  };

//  EmpDetails.prototype.getName= function(){
//     return this.name;
//  };
//  EmpDetails.prototype.getId= function(){
//     return this.id;
//  };


//  let emp = new EmpDetails('Bruce', 22);
//   let emp2 = new EmpDetails('Lee', 45);

//  console.log(emp.getName()); console.log(emp2.getId());



//*******************************************Polymorphism*********************************************************


/**Poly - many, morph - forms */

// in oop, its an ability to create a varaible, func or an object that has more than one form.

// class Animal{

//     constructor(name) {
//         this.name = name;
//     }

//     eats() {
//         console.log(this.name + " eats food");
//     }
// }

// class Alligator extends Animal {
    

//     /** if the eats() func is not available in child class, then it  looks in parent class to executes
//      * however if the func is present in child class, the eat func gets overridden, This is called method overriding, 
//      * 
//      * if I waant to call parent class method as well, then I will use super.eats()*/
    
    
//     // eats() {
//     //     console.log(this.name + " hunt seals");
//     // }

//         eats() {
//         super.eats();    
//         console.log(this.name + " hunt seals");
//     }
// }
// let murphy = new Alligator('murphy');
// murphy.eats();



//******************************************* Abstratcion *********************************************************

/** It is a way of hiding the implementation detailsshowing only the functionlity to the user.  
 * Abstration hides certain details and only show the essential features of object
 * 
 * This is easy to understnd & maintain
*/

// function Employee(name, age, baseSalary) {   // constructor
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;

//     // this.monthlyBonus = 1000;

//     // this.calculateFinalSalary = function() {
//     //     let finalSalary = this.baseSalary + this.monthlyBonus;
//     //     return finalSalary;
//     // }


//     /** Apply abstraction */

//     let monthlyBonus = 1000;
        
//     let calculateFinalSalary = function() {
//         let finalSalary = baseSalary + monthlyBonus;
//         return finalSalary;
//     }


//     this.getEmpDetails= function() {
//     console.log("Name: "+this.name + " BaseSalary: "+this.baseSalary + " And Age is : "+ age);
//     console.log("Final salary: "+calculateFinalSalary());// By abstraction

// }
// };

// let emp = new Employee('John', 22, 233400);

// emp.getEmpDetails();

// // emp.monthlyBonus = 300000;
// // console.log("Final salary: "+emp.calculateFinalSalary());


//*******************************************Import & Export*********************************************************



// Import & Export

// Import -> Used to bring in code from other files or modules into the current file
// Export -> Used to make code available for use in other files or modules

// Run from import_export.js file to see the output

// export class ImportExport{
// // export default class ImportExport{

//     checkImportExport(){
//         console.log("Import & Export working")
//     }
// }




//****************************************************************************************************



// Concantation -> Combining multiple strings or values together into a single string


// let firstName = "John";

// const str1 = "Hello " + firstName + " how are you?"; //double quote string
// const str2 = 'HEllo ' + firstName + ' how are you?'; //single quote string
// const str3 = `HEllo ${firstName} how are you?`; //backtick string

// console.log(str1);
// console.log(str2);
// console.log(str3);



//****************************************************************************************************
