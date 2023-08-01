// const Post = React.lazy(() => import("@/components/Post/Post") as any);
import Navbar from "@/components/layout/navbar";
import prisma from "@/lib/prisma";

type user = {
  id: number;
  name: string;
  email: string;
};

export default async function Home() {
  const users = (await getUsers()) as user[];

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Navbar />
      <h1 className="text-3xl font-bold">Users</h1>
      {users.map((user, index) => (
        <div
          key={index}
          className="flex gap-5 mt-2 p-2 px-3 bg-zinc-600 w-72 text-white font-semibold"
        >
          <h2>{user.name}</h2>
          <span>{user.email}</span>
        </div>
      ))}
    </main>
  );
}

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
