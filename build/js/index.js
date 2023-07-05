const list = [
    { id: 1, name: "ahmad", age: 18 },
    { id: 2, name: "ali", age: 20 },
    { id: 3, name: "reza", age: 22 },
];
const select = list.find((item) => item.name === "reza" && item.age >= 18);
console.log(select);
