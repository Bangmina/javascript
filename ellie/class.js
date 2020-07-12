'use strict';
// Object-oriendted programming
// class: template  
// object: instance of a class
// Javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`)
    }
}

const ellie = new Person('ellie',20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
    constructor (firstName, lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //get으로 값을 return
    get age() {
        return this._age;
    }
    // set으로 값을 설정
    set age(value) {
        // if(value < 0) {
        //     console.log('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
        // this._age = value;
    }
}

const user1 = new User('steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (bublic, private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('삼각형');
    }
    getArea() {
        return (this.width * this.height ) / 2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea())
const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea())

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
