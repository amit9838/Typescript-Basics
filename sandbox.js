var myname = 'mario';
var age = 30;
var isBoy = true;
// myname = 20  // Invalid operation 
// myname can take string velues only, because it has been decleared with string.
myname = "Maria"; // Valid operation
age = 40;
isBoy = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ("sd"));
// Here ts is not throwing error even though we are passing string in the function 
// because function is not asking for any specific datatype as the argument
// But if we see console is says NaN (not a number), it can be fixed or catched at compile 
// if we add data type in the finction argument as below
var circ2 = function (diameter) {
    return diameter * Math.PI;
};
// console.log(circ2("sd"))  // Now this line throws error as invalid arg being passed
console.log(circ2(5));
