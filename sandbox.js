// Lectute 5 - Explict Types
// Explicit Types
var myname;
// This means 'myname' will only accept strings such as "hello"
// similarly we can do this for other data types as well
var age;
var isLoggedIn;
// Now, we can to change any of the variable , w'll have to use data type in which it has been initialised like- 
age = 40;
// age = "ten"  // Invalid operation : age only takes number data-type
// ARRAYS
var ninjas;
// This means that 'ninjas' array will only take 'string' as array elements
// We can also initialize with some default value, so that we can directly perform operations like .push()
// ninjas.push('dsf') // Invalid operation : Variable 'ninjs' is used before initialzed
var names = [];
names.push("ion");
// UNION TYPES
// It can accept values with multiple data types 
var mixed = [];
// 'mixed' can accept values from any of the datatype above(string,number,boolean)
mixed.push("two");
mixed.push(2);
mixed.push(false);
console.log(mixed);
// Application
var uid;
uid = "123";
uid = 123;
// OBJECTS
var person;
person = { name: "john", age: 23, isAboveEighteen: true };
var person2;
person2 = {
    name: 'josh',
    age: 'six', //Age as string
    isAboveEighteen: false
};
person2 = {
    name: 'josh',
    age: 6, // age as number
    isAboveEighteen: false
};
