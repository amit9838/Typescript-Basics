// Lectute 5 - Explict Types

// Explicit Types
let myname : string
// This means 'myname' will only accept strings such as "hello"
// similarly we can do this for other data types as well

let age : number
let isLoggedIn : boolean

// Now, we can to change any of the variable , w'll have to use data type in which it has been initialised like- 
age = 40

// age = "ten"  // Invalid operation : age only takes number data-type


// ARRAYS
let ninjas : string[]; 
// This means that 'ninjas' array will only take 'string' as array elements
// We can also initialize with some default value, so that we can directly perform operations like .push()

// ninjas.push('dsf') // Invalid operation : Variable 'ninjs' is used before initialzed

let names : string[] = []
names.push("ion")

// UNION TYPES
// It can accept values with multiple data types 

let mixed : (string|number|boolean)[] = []
// 'mixed' can accept values from any of the datatype above(string,number,boolean)
mixed.push("two")
mixed.push(2)
mixed.push(false)

console.log(mixed)


// Application
let uid : string|number
uid = "123";
uid = 123;

// OBJECTS
let person : object;
person = {name:"john", age:23, isAboveEighteen:true}

let person2 : {
    name : string,
    age : number|string
    isAboveEighteen : boolean
}

person2 = {
    name:'josh',
    age:'six',  //Age as string
    isAboveEighteen:false
}

person2 = {
    name:'josh',
    age:6,   // age as number
    isAboveEighteen:false
}