import Navbar from "@/components/layout/navbar";
import prisma from "@/lib/prisma";
import { LoginIsRequiredInServerSide } from "@/lib/Auth";

type user = {
  id: number;
  name?: string;
  email: string;
  role: string;
};

export default async function Home() {
  const users = (await getUsers()) as user[];
  const session = await LoginIsRequiredInServerSide();

  return (
    <main className="flex min-h-screen flex-col p-8 px-4">
      <Navbar session={session} />
      <div className="px-7">
        <pre>{JSON.stringify(session, null, 2)}</pre>
        <h1 className="text-3xl font-semibold">Users</h1>
        {users.map((user, index) => (
          <div
            key={index}
            className="flex gap-5 mt-2 p-2 px-3 bg-zinc-600 w-72 text-white font-semibold"
          >
            <h2>{user.name}</h2>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}
