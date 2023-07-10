// type List = {
//   id: number;
//   name: string;
//   age: number;
// };

// class User {
//   constructor(public name: string, public age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   public sayHi(): void {
//     console.log(`Hi, I am ${this.name}`);
//   }

//   list: List[] = [
//     { id: 1, name: "ahmad", age: 18 },
//     { id: 2, name: "ali", age: 20 },
//     { id: 3, name: "reza", age: 22 },
//   ];

//   addCount(): void {
//     let count = 0;
//     setInterval(() => {
//       while (true) {
//         count++;
//       }
//     }, 1000);
//   }
// }

// const user = new User("ahmad", 18);
// console.log(user.addCount());

// class Admin extends User {
//   constructor(name: string, age: number) {
//     super(name, age);
//   }
//   public sayHi(): void {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
//   }
// }

// const admin = new Admin("ali", 20);

// admin.sayHi();

interface Student {
  name: string;
  age: number;
  class: number[];
}

const student: Student = {
  name: "ahmad",
  age: 18,
  class: [1, 2, 3],
};

// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }

Object.keys(student).map((key) => {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
});

const studentGetData = (student: Student, key: keyof Student): void => {
  console.log(`Student: ${key}: ${student[key]}`);
};

studentGetData(student, "class");

console.log("----------------------------------");

interface Income {
  [key: string]: number;
}

type Stream = "salary" | "bonus" | "other";

type IncomeType = Record<Stream, number | string>;

const monthlyIncome: IncomeType = {
  salary: 1000,
  bonus: 500,
  other: "300",
};

for (const key in monthlyIncome) {
  console.log(`${key}: ${monthlyIncome[key as keyof IncomeType]}`);
}

interface HasID {
  id: number;
}

const userIdentity = <T extends HasID>(user: T): T => {
  return user;
};

console.log(userIdentity({ id: 1, name: "ahmad" }));
// console.log(userIdentity({ name: "ahmad" })); // requierd id if it is not get error
