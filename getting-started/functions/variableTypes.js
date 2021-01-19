// there are three types of variables:
// var, let & const
// we will discuss each differencies

// let
let a; // Create a variable called a
a = 10; // Assign a with 10
a = 20; // Reassign a with 20

// var
var b; // Create a variable called b
b = 10; // Assign b with 10
b = 20; // Reassign b with 20

// looks same, but var doesn't care if you create a new variable with same name
var b = 50; // Redeclare b and assign it with 50

// but let care if you create a variable with same name
let a = 10;
let a = 20;
/*
Thrown:
SyntaxError: Identifier 'a' has already been declared */

// const
const z = 10; // Declare a variable called z

// const is a term for constant, means the variable is constant or immutable, if you declare it once
// you can't fill it with new values or create variable with the same name like let
z = 20;
/*
Thrown:
TypeError: Assignment to constant variable. */
