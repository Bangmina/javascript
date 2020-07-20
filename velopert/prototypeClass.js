'use strict';
/* 
// 객체 생성자 - 대문자 시작
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

// 프로토타입의 역할
// 객체 생성자로 무언갈 만들었을 때
// 만든 객체들끼리 공유할 수 있는 값이나 함수를
// 자바스크립트의 객체생성자로 만든 함수에다가
// 프로토타입으로 설정할 수 있는것
Animal.prototype.say = function () {
    console.log(this.sound);
}

function Dog(name, sound) {
    // call() => this, 파라미터 불러옴
    Animal.call(this, '개', name, sound);
}
function Cat(name, sound) {
    Animal.call(this, '고양이',name, sound);
}
Animal.prototype.shareValue = 1;

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;
// 객체
const dog = new Dog('개','멍멍이','멍멍');
const cat = new Cat('고양이','야옹이','야옹');


dog.say();
cat.say();

// 객체 생성자 상속받기

*/



//ES6 Class
// 객체 생성자로 만든 것 Class로 재정의

class Animal {
    // 생성자 constructor
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound + '1');
    }
}

// extends => 특정 클레스를 상속받는다는 의미 
class Dog extends Animal {
    // 기존 Animal에서 사용하는 constructor을 덮어 쓰는데
    // 그 과정에서 super 키워드를 사용해서
    // animal이 가지고 있는 construcor을 호출하고
    // 자신이 해야 할일을 처리함
    constructor(name, sound) {
        super('개', name, sound) // 자신이 상속받은 class의 constructor을 호출
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super ('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이','멍멍');
const cat = new Cat('고양이','야옹');

dog.say();
cat.say();