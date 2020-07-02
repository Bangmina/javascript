'use strict';

// Objects
// one of the Javascript's data types.
// a collection of related data and/or functionality.
// Nearly all object in Javascript are instances of Object
// object = { key : value }; 

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor'
function print(person) {
    console.log(person.name)
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4};
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);
