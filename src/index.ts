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
const b = new Set(list);
console.log(b);

const select = b.add({ id: 4, name: "azhi", age: 24 });

function selectList<T extends keyof List>(key: T, list: List[]) {
  return list.flatMap((item) => item[key]);
}

// const total = () => {
//   return list.reduce((prev, curr) => {
//     return prev + curr.age;
//   }, 0);
// };

// console.log(total());
console.log(selectList("age", list));
