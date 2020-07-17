'use strict';

const array = [1, 2, 3, 4, 5, 6, 7, 8];

// const squared = [];
// for (let i=0; i < array.length; i++) {
//     squared.push(array[i] * array[i])
// }
// array.forEach(n =>
//     squared.push(n*n)
// )
// console.log(squared);

const square = n => n * n;
const squared = array.map(square);

console.log(squared)

const items = [
    {
        id:1,
        text: 'hello'
    },
    {
        id:2,
        text: 'bye'
    }
]

const texts = items.map(item => item.text);
console.log(texts)

const superheroes = [ '아이언민', '캡틴아메리카', '토르', '닥터 스트레인지']
// const index = superheroes.indexOf('닥터 스트 레인지');
// console.log(index);

const todos = [
    {
        id:1,
        text: '자바스크립트 입문',
        done: true,
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true,
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true,
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false,
    }
]

const index = todos.findIndex(todo => todo.id === 3);
console.log(index);

const tasksNotDone = todos.filter(todo => todo.done);
console.log(tasksNotDone)

// 배열내장함수 splice, slice
// slice 기존의 배열을 건들이지 않음
// splice 기존의 배열을 수정함

// * splice
// const numbers = [10, 20, 30, 40];
// const del = numbers.indexOf(30);
// const spliced = numbers.splice(del, 2);
// console.log(spliced)
// console.log(numbers)

// * slice
// const numbers = [10, 20, 30, 40];
// const slice d = numbers.slice(0,2);
// console.log(`slice : ${sliced}`);
// console.log(`numbers : ${numbers}`);

// * shift
// - 맨앞에 있는 원소를 하나씩 꺼내는 함수
// const numbers = [10, 20, 30, 40];
// const value = numbers.shift();
// numbers.shift();
// numbers.shift();
// console.log(value); // 10
// console.log(numbers);

// * pop
// - 맨뒤에 있는 원소를 하나씩 꺼내는 함수
// const numbers = [10, 20, 30, 40];
// console.log(numbers);
// const value = numbers.pop();
// console.log(value);
// console.log(numbers);

// * unshift
// - 맨 앞부분에 원소 추가
// const numbers =[10, 20, 30, 40, 50];
// numbers.unshift(5);
// console.log(numbers);

// // * concat
// // - 여러가지 배열을 하나로 합쳐줌
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concated = arr1.concat(arr2);
// const spred = [...arr1, ...arr2]
// console.log(`arr1 : ${arr1}`);
// console.log(`arr2 : ${arr2}`);
// console.log(`concat : ${concated}`);
// console.log(`ES6 스프레드 연산자 : ${spred}`);

// * reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current,) => accumulator + current, 0);
console.log(`reduce sum : ${sum}`)
//
const avg = numbers.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
}, 0);
console.log(`reduce avg : ${avg}`);
// 알파벳이 몇개식 있는지 객체에 구현
const alphabets = ['a', 'a', 'a', 'b', 'c', 'c', 'd', 'e'];
const counts = alphabets.reduce((acc, current) => {
    if(acc[current]) { //acc.a
        acc[current] += 1;
    } else {
        acc[current] = 1;
    }
    return acc;
},{});
console.log(counts);

