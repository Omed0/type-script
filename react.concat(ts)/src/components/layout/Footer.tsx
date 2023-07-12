import { ReactElement } from "react";

export default function footer({ name }: { name?: string }): ReactElement {
  return (
    <div>
      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {name || "React + Typescript"}
      </p>
    </div>
  );
}
