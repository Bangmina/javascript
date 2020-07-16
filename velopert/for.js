'use strict';
// for
const names = ['멍멍이', '야옹이', '멍뭉이'];

for (let i=0; i < names.length; i++) {
    console.log(names[i]);
}

// while
let i = 0;
let isFun = false;
while (!isFun) {
    console.log(i)
    i++;
    if (i === 30) {
        isFun = true;
    }
}

// for...of, for...in
// for...of 배열 안에 있는 것들을 사용해서 어떠한 작업을 해야 할때 사용

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
    console.log(`${key} : ${doggy[key]}`);
}