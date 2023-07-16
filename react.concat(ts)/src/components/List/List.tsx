import { ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul className="flex gap-1">
      {items.map((item, index) => (
        <li key={index}>
          {render(item)}
          {item === "🚀 space" ? ":) 👽" : "-->"}
        </li>
      ))}
    </ul>
  );
};

export default List;
