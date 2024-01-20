"use strict";
// Functions
let greet;
// Here 'greet' has been defined as function type, later we can define a funtion with name 'greet' but can't assign any valur to it.
greet = () => {
    console.log("hello there");
};
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(2, 5);
