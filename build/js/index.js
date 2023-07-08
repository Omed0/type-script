"use strict";
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.list = [
            { id: 1, name: "ahmad", age: 18 },
            { id: 2, name: "ali", age: 20 },
            { id: 3, name: "reza", age: 22 },
        ];
        this.name = name;
        this.age = age;
    }
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    }
    addCount() {
        let count = 0;
        setInterval(() => {
            while (true) {
                count++;
                console.log(count);
            }
        }, 1500);
    }
}
const user = new User("ahmad", 18);
console.log(user.addCount());
