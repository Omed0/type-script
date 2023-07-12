import { ReactElement } from "react";

type HeadingProps = {
  title: string;
};

export default function heading({ title }: HeadingProps): ReactElement {
  return <h1 className="text-4xl bold gold mt-8 text-center">{title}</h1>;
}
