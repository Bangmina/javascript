'use strict';
// 1. 객체 : 하나의 이름에 여러가지 값
// const dog = {
//     key : '키값',
// }
//
const ironMan = {
    name : '토니 스타크',
    actor: '로버트 다우니 주니어',
    alias: '아이언맨'
}

const captainAmerica = {
    name: '스티븐 로저스',
    actor : '크리스 에반스',
    alias : '캡틴 아메리카'
};

// 2. 객체 - 비구조화할당(객체구조분해) : 특정 값들을 객체에서 빼온다

const {name} = ironMan;
console.log(name); // 토니스타크


function print({ alias, name, actor }) {

    const text = `${alias} ${name} 역할을 맡은 배우는 ${actor}입니다`
    console.log(text);
}

print(ironMan);
print(captainAmerica);

console.log(ironMan);
console.log(captainAmerica);

// 3. 객체 -  객체 안에 함수 넣기
// 함수에 있는 this는 자신이 속해 있는 곳을 가르키는것
// 화살표함수 내부에서는 this를 인식하지 못한다.

const dog = {
    name: '멍멍이',
    sound: '멍멍',
    say: function() {
        console.log(this);
        console.log(this.sound);
    }
}

const cat = {
    name : '야옹이',
    sound : '야옹~'
}

cat.say = dog.say;
dog.say(); // 멍멍
cat.say(); // 야옹

const catSay = cat.say;
// catSay(); // undefined

// 4. 객체 getter setter
// 특정값을 바꾸려고 하거나 조회하려고할 때 원하는 코드를 실행할 수 있다.

// 4. 객체 - getter
// Getter : 특정 값을 조회하려고 할 때 특정 코드를 실행시키고 연산된 값을 받아서 사용 
const numbers = {
    _a : 1,
    _b : 2,
    sum: 3,
    calculate() {
        console.log('calculate');
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value; 
        this.calculate();
    }
} 

console.log(numbers.sum);
numbers.a = 5;
console.log(numbers.sum);

numbers.b = 7;
console.log(numbers.sum);

numbers.a = 9;
console.log(numbers.sum);
