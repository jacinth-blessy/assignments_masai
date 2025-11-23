// question 11 : Write a function to multiply two numbers with default parameters.//

function multiply(a , b ) {

  return a * b;
}


const multiply = (a=1,b=1) => a * b;
console.log(multiply(2,3)); 
console.log(multiply());


//q12 : Write a function to return an object containing the square and cube of a number.//
const squarecube = (n) => ({square : n*n , cube : n*n*n});

console.log(squarecube(3)); // {square: 9, cube: 27}


//question 13 : Given an array of objects representing people with nested address objects, use destructuring to extract the city and street name of each person.//
const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
const final = []
for (let person of people) {
  const {name} = person;
  const {city} = person.address;
  const {name: streetName} = person.address.street;  
  final.push(`${name} lives in ${city} on ${streetName}.`);
}

console.log(final); 
// Output: [ "Alice lives in New York on Broadway.", "Bob lives in Los Angeles on Sunset Boulevard." ]


//question 14 : Use the spread operator to merge two objects, updating some properties in the process.//
const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

const updatedProfile = {...profile, ...updates,}
console.log(updatedProfile);


//question 15 : Shorthand notations

const username = "Jacinth Blessy"
const course = "Introduction to Javascript"
console.log(`Hello ${username}, welcome to the ${course} course!`);

const name = "Sam";
const age = 21;
const student = {name, age, greet() {console.log("Hello");} };

const getFullName = (first, last) => `${first} ${last}`;

//question 16 : Arrow Functions and Ternary Operators

const isEven = (num) => num % 2 === 0 ? true : false;
console.log(isEven(45))
const marks = (mark) => mark>=35 ? "Pass" : "Fail";
console.log(marks(45))
const greet = (name = "Guest") => `Hello, ${name}!`; 
console.log(greet("Blessy"));
console.log(greet());


//question 17 : Rest and Spread Operators, Destructuring

arr1 = [1, 2, 3];
arr2 = [4, 5];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5]  

const sum = (...nums) => {
  let total = 0;
  for (let num of nums) {
    total += num;
  }
  return total;
}
console.log(sum(1,2,3,4))

const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {name: fullname, age: personage, address: {pin}} = user;
console.log(fullname, personage, pin);


//question 18 : Let and Var, Optional Chaining

if (true) {
  let x = 10;
  var y = 20;
}
console.log(y); // var is function-scoped, so this will work
console.log(x); //let is block-scoped, so this will throw an error

const personprofile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

const userEmail = personprofile.user?.details?.email;
const userPhone = personprofile.user?.details?.phone;

console.log(userEmail); // This will not throw error as the object path exists
console.log(userPhone); // This will be undefined instead of throwing an error






