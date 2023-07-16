import React from "react";

type CounterProps = {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};

export default function couter({ setCounter, children }: CounterProps) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-center text-3xl font-semibold mb-6">Counter</h1>
      <div className="mx-auto flex items-center gap-5">
        <button className="btn" onClick={() => setCounter((prev) => prev + 1)}>
          +
        </button>
        <span>{children}</span>
        <button
          className="btn"
          onClick={() => setCounter((prev) => (prev < 1 ? 0 : prev - 1))}
        >
          -
        </button>
      </div>
      <button
        className="btn text-2xl hover:bg-red-500"
        onClick={() => setCounter((prev) => (prev = 0))}
      >
        Reset
      </button>
    </div>
  );
}
