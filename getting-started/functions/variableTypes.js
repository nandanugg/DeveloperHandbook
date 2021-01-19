// there are three types of variables:
// var, let & const
// we will discuss each differencies

// let
let a; // create / declare a variable
a = 10; // give it value of 10
a = 20; // give it value of 20, the previous value will be dismissed to save memory (RAM)

// var
var b;
b = 10;
b = 20;

// looks same, but var doesn't care if you create a new variable with same name
var b = 50; // we can fill our variable with value when declaring it directly

// but let care if you create a variable with same name
let a = 10;
// Thrown: SyntaxError: Identifier 'a' has already been declared

// const
const z = 10;
z = 20;
// Thrown: TypeError: Assignment to constant variable.

// we cant also fill a const that is doesn't have a value when declaration
const q;
q = 11
// Thrown: TypeError: Assignment to constant variable.
