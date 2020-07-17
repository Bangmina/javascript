'use strict';
// // * forEach : 각 원소들에 대하여 반복적으로 호출
// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
// superheroes.forEach((hero) => {
//     console.log(`forEach : ${hero}`)
// });

// // * map : 배열에 있는 모든 원소를 다른 형태로 변환할 때
// const array = [1,2,3,4,5,6,7,8];
// const squared = array.map( n => n * n);
// console.log(`map : ${squared}`);

// // * indexOf : 특정 값이 어디에 있는지 인덱스값을 알아내는것
// const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];
// const indexOf = superheroes.indexOf('토르');
// console.log(`indexOf '토르'의 인덱스 값 : ${indexOf}`); // 2

// // * findIndex
// // * find : 특정조건을  확인해서 각 원소에 대하여 함수를 돌려서 조건을 만족하는 원소가 몇번째 인지
// // * filter : 배열에서 특정조건을 가지고 조건을 만족하는 원소들로 새로운 배열을 만들때 사용
// const todos = [
//     {
//         id: 1,
//         text: '자바스크립트 입문',
//         done: true
//     },
//     {
//         id: 2,
//         text: '함수 배우기',
//         done: true
//     },
//     {
//         id: 3,
//         text: '객체와 배열 배우기',
//         done: true
//     },
//     {
//         id: 4,
//         text: '배열 내장함수 배우기',
//         done: false
//     },
// ]
// // find index
// const todoFindIndex = todos.findIndex(todo => todo.id === 3);
// console.log(`findIndex : ${todoFindIndex}`); //2
// // find
// const todoFind = todos.find(todo => todo.id === 3);
// console.log(todoFind); // 객체가 console에 찍힘
// //filter
// const tasksNotDone = todos.filter(todo => todo.done === false);
// console.log(tasksNotDone); // 객체가 console에 찍힘

// // * splice : 특정 index에서 몇개를 지우는것
// const numbers = [10, 20, 30, 40];
// const index = numbers.indexOf(30); //2
// numbers.splice(index, 1);
// console.log(`splice: ${numbers}`); // 수정된 numbers가 찍힘

// // * slice : 기존 배열에 변화를 주지 않고 배열 원소를 잘라냄
// const numbers = [10, 20, 30, 40];
// const sliced = numbers.slice(0,2); //0부터 시작해서 2 전까지!
// console.log(numbers); // [10,20,30,40]
// console.log(sliced); // [10,20]

// // * shift : 맨 왼쪽에 있는 것을 바깥으로 꺼내는것 <-> unshift : 맨 왼쪽에 원소 추가
// // 기존배열을 수정한다.
// const numbers = [10, 20, 30, 40];
// const value = numbers.shift();
// console.log(`shift 사용후 numbers 변화 : ${numbers}`);
// console.log(`shift된 원소 : ${value}`);

// // * concat : 배열 두개를 합쳐서 새로운 배열을 만들 때
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const cancated = arr1.concat(arr2);
// console.log(cancated);
// console.log(`es6 스프레드문법 ${[...arr1, ...arr2]}`)

// *** reduce : 누적되는 값 (accumulator) 사용해서 연산
const array = [1, 2, 3, 4, 5];
let sum = array.reduce((accumerlator, current) =>  accumerlator + current, 0);
console.log(`reduce sum : ${sum}`);
//
