import { useState } from "react";
import Layout from "./components/layout/Layout";
import Counter from "./components/Counter/Couter";
import List from "./components/List/List";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="mt-6">
      <Counter setCounter={setCount}>Count is: {count}</Counter>
      <hr className="h-1 w-full bg-zinc-600 mt-3 mb-4" />
      <List
        items={["🔨 work", "🌏 earth", "🚀 space"]}
        render={(item) => <span className="bold">{item}</span>}
      />
      <Layout children={<h1>hello world</h1>} />
    </div>
  );
}
