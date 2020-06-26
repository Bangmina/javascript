// 1. STring concatenation
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literal: 1 + 2 = ${1+2}`);

// 2. Numeric operators 
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(1%1); // 나머지 값
console.log(2**3); // 2의 3승 

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// couner = counter + 1;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`)
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`)

// 4. Assignment operators 할당
let x = 3;
let y = 6;
x += y // x = x + y
x -= y
x *= y
x /= y

// 5. Comparison operators 비교
console.log(10 < 6) // less than
console.log(10 <= 6) // less than or equal
console.log (10 > 6) // greater than
console.log(10 >= 6) // greater than or equal


// 5. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);

// && (and)
console.log(`or : ${value1 && value2 && check()}`);

// often used to compress log if-statment
// nullableObject && nullableObject.something



function check() {
    for (let i=0; i<10; i++) {
        //wasting time
        console.log('OMG');
    }
    return true;
}

// 7. Equality
const stringFIve = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFIve == numberFive);
console.log(stringFIve != numberFive);

// === strict equality, no type conversion
console.log(stringFIve == numberFive);
console.log(stringFIve !== numberFive);

//object equalty by reference
const ellie1 = { name : 'ellie' };
const ellie2 = { name : 'ellie' };
const ellie3 = ellie1
console.log( ellie1 == ellie2 ); //f
console.log( ellie1 === ellie2 ); //f 
console.log( ellie1 == ellie3 ); // t

// equality - puzzler
console.log(0 == false); // true
// 0은 boolean type이 아니기 때문에 false
console.log(0 === false); // false
console.log('' == false); // true
// ''은 boolean type이 아니기 때문에 false
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined) // false
// 0과 null, undefined는 false

// 8. Conditional operators : if
// if, else if, else
const name = 'coder';
if ( name === 'ellie') {
    console.log('ellie');
} else if (name === 'corder') {
    console.log('corder');
} else {
    console.log('unkwnon')
}

// 9. Ternary operator : ?
// condition ? value1 : value2
console.log(name==='ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch(browser) {
    case 'IE' :
        console.log('IE');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('Chrome Firefox');
        break;
    default:
        console.log('default');
        break;
}

// 11. while loop
// while loop, while the condition is truthy,
// body code is executed 
let i = 3;
while(i >0) {
    console.log(`while: ${i}`);
    i--
}

// do while loop, body code is executed first,
// then check the condition.
let a = 3;
do {
    console.log(`do while: ${a}`);
    a--;
} while (a > 0)


// for loop, for (begin; condition; step)
for (i=3; i>0; i--) {
    console.log(`for: ${i}`) 
}

for (i=0; i<11; i++) {
    if( i%2 === 0 ) {
        console.log(`짝수 ${i}`)
    }
}

for ( i=0; i<11; i++) {
    console.log(i)

    if( i > 8) {
        break;
    }
}