// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable, rw(read/write)
// let (added In ES6)
let globalName = 'global name';
{
    let name ='ellie';
    console.log(name);
    name = 'hello';
    console.log(name);  
    console.log(globalName);

}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// bar hoisting (move declaration from bottom to top)
{
    age = 4;
    var age;
}
console.log(age);

// 3. Constant, r(read only)
// use const whenever possible.
// only use let if variable needs to change.


const daysInWeek = 7;
const maxNumber = 5;
// Note!
//Immutable data types : premitive types, frozen objects (i.e. objet.freeze())
//Mutable data types : all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

