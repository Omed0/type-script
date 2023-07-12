import { ReactNode } from "react";
import Heading from "./Heading";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  title?: string;
};

export default function layout({
  children,
  title = "React + Typescript",
}: LayoutProps) {
  return (
    <>
      <header>
        <Heading title={title} />
      </header>

      <main className="container mx-auto">
        <div className="py-4 text-center">{children}</div>
      </main>

      <footer>
        <Footer name="Omed" />
      </footer>
    </>
  );
}
