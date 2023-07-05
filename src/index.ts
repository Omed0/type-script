interface List {
  id: number;
  name: string;
  age: number;
}

const list: List[] = [
  { id: 1, name: "ahmad", age: 18 },
  { id: 2, name: "ali", age: 20 },
  { id: 3, name: "reza", age: 22 },
];

const select = list.concat({ id: 4, name: "mohammad", age: 24 });
console.log(select);
