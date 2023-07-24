// import Layout from "@/components/layout/Layout";
// import List from "@/components/List/List";
// import Counter from "@/components/Counter/Counter";
// const Post = React.lazy(() => import("@/components/Post/Post") as any);
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export default async function Home() {
  const users = await getUsers();
  let counter: number = 0;

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <Counter counter={counter}>Count is: {counter}</Counter>
      <hr className="h-1 w-full bg-zinc-600 my-5" />
      <List
        items={["🔨 work", "🌏 earth", "🚀 space"]}
        render={(item: any) => <span className="bold">{item}</span>}
      />
      <Layout children={<h1>hello world</h1>} />
      <section>
        <Post />
      </section> */}
      <h1>{users.map((user: any) => user.name).join(", ")}</h1>
      <Button className="">hello world</Button>
    </main>
  );
}

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
