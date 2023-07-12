// type List = {
//   id: number;
//   name: string;
//   age: number;
// };
var student = {
    name: "ahmad",
    age: 18,
    class: [1, 2, 3],
};
// for (const key in student) {
//   console.log(`${key}: ${student[key as keyof Student]}`);
// }
Object.keys(student).map(function (key) {
    console.log("".concat(key, ": ").concat(student[key]));
});
var studentGetData = function (student, key) {
    console.log("Student: ".concat(key, ": ").concat(student[key]));
};
studentGetData(student, "class");
console.log("----------------------------------");
var monthlyIncome = {
    salary: 1000,
    bonus: 500,
    other: "300",
};
for (var key in monthlyIncome) {
    console.log("".concat(key, ": ").concat(monthlyIncome[key]));
}
var userIdentity = function (user) {
    return user;
};
console.log(userIdentity({ id: 1, name: "ahmad" }));
// console.log(userIdentity({ name: "ahmad" })); // requierd id if it is not get error
var getUserProperty = function (users, key) {
    return users.map(function (user) { return user[key]; });
};
var users = [
    {
        id: 1,
        name: "ahmad akram",
        username: "ahmad",
        email: "ahmad@gmail.com",
        address: {
            city: {
                city: "Gwenborough",
                street: "Kulas Light",
                suite: "Apt. 556",
                zipcode: "92998-3874",
            },
        },
    },
    {
        id: 2,
        name: "ali fatah",
        username: "ali",
        email: "ali@gmail.com",
        address: {
            city: {
                city: "Gwenborough",
                street: "Kulas Light",
                suite: "Apt. 556",
                zipcode: "92998-3874",
            },
        },
    },
];
console.log(getUserProperty(users, "name"));
console.log(getUserProperty(users, "email"));
console.log(getUserProperty(users, "address"));
