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
//splice
// const numbers = [10, 20, 30, 40];
// const del = numbers.indexOf(30);
// const spliced = numbers.splice(del, 2);
// console.log(spliced)
// console.log(numbers)

// slice
const numbers = [10, 20, 30, 40];
const sliced = numbers.slice(0,2);
console.log(`slice : ${sliced}`);
console.log(`numbers : ${numbers}`);

// slice 기존의 배열을 건들이지 않음
// splice 기존의 배열을 수정함