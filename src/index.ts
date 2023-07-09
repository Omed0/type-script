type List = {
  id: number;
  name: string;
  age: number;
};

class User {
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
  public sayHi(): void {
    console.log(`Hi, I am ${this.name}`);
  }

  list: List[] = [
    { id: 1, name: "ahmad", age: 18 },
    { id: 2, name: "ali", age: 20 },
    { id: 3, name: "reza", age: 22 },
  ];

  addCount(): void {
    let count = 0;
    setInterval(() => {
      while (true) {
        count++;
      }
    }, 1000);
  }
}

const user = new User("ahmad", 18);
console.log(user.addCount());

class Admin extends User {
  constructor(name: string, age: number) {
    super(name, age);
  }
  public sayHi(): void {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
  }
}

const admin = new Admin("ali", 20);

admin.sayHi();
