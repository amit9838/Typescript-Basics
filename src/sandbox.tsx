// Functions
let greet : Function;
// Here 'greet' has been defined as function type, later we can define a funtion with name 'greet' but can't assign any valur to it.

greet = () => {
    console.log("hello there");
}

const add = (a:number, b:number, c: number|string = 10) => {
    console.log(a+b)
    console.log(c)
    return a+ b
}

add(2,5)
// In tha above add function,  it accepts three parameters among which last(c) is optioal and has default value = 10
// it can accept number as well as string
// Here if we see the return type of the add function is number (automatically determined by the compiler)
// 


const add2 = (a:number, b:number, c?: number|string) => {
    console.log(a+b)
    console.log(c)
}

add2(2,5)
// In this function c is optianal but it dosen't have any default value assigned, so js assign 'undefined' to
// this variable (c) is no values is supplied for 
// In add2 function if nothing is returned then function returns void by defult.


// we can explicitly define return type of a funcion
const add3 = (a:number, b:number, c?: number|string) : number => {
    console.log(a+b)
    console.log(c)
    return a+b
}

add3(2,5)