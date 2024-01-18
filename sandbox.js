// Lectute 6 - Dynamic(any) Types
// 'any' type can accept values of any data-type
var age = 25;
age = true; //  it can be boolean
console.log(age);
age = "hello"; // It can be string
console.log(age);
age = { 'value': 25 }; // It can be object
console.log(age);
// Array can accept value of any data-type
var mixed = [];
mixed.push('twelve');
mixed.push(12);
mixed.push(true);
mixed.push({ value: "twelve" });
// Objects can also have this (any) field
var ninja;
ninja = { name: 'jack', age: '22' };
ninja = { name: 'jack', age: 22 };
console.log(ninja);
