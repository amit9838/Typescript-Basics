// ========= Array =========

let names = ["aa", "bb", "cc"]

// names = "dd"  // [Invalid operation] because names has array data type
names.push('dd')

// names.push(4) // [invalid operation] because names array can only contain string elements

let mixed = ["john", 23, "kia", "33"]

// Her mixed has been initialized with types of data [string, num] so it can take 
// items of string and number data-typs , but it can't take values of other data-types

mixed.push("ria")
mixed.push(21)
mixed.push(33.22) // can also take descimal number
// mixed.push(false) // Incalid operation

mixed[0] = 11
// Values can also be changed to other data type value if it has been declared in the array

// ========= Objects =========
let ninja = {
    name : "yosh",
    age:22,
    gender:"male"
}

// We can't cange the structure of an object like in the above object -
// We need to add exactly 3 fiels not less or more
// We can't assign attributes with diffrent data-types other than assigned data-type.

ninja.name = "kio"
// ninja.name = 22 // [Invalid Operation] , Can't assign int to a string variable
// ninja.skills = ['fighting']  // [Invalid Operation],  Can't add any other field

ninja = {
    name:"aa",
    age:33,
    gender:"female"
}

console.log(ninja)

//  above object should have exactly 3 fields with matching data types