"use client";

import { signIn, signOut } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ session }: any) {
  return (
    <nav className="flex justify-between p-3 px-6 w-full ">
      <div className="flex gap-4">
        <Link href={"admin"}>
          <Button variant="outline">Admin</Button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt="Picture of the author"
            width={50}
            height={50}
            className="rounded-full"
          />
        )}
        <h3 className="text-2xl font-semibold p-1">{session?.user?.name}</h3>
        {session?.user ? (
          <Button
            variant="outline"
            className="bg-red-500 text-white hover:text-white hover:bg-red-400"
            onClick={() => signOut()}
          >
            Sign Out
          </Button>
        ) : (
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:text-white hover:bg-blue-600"
            onClick={() => signIn()}
          >
            Sign In
          </Button>
        )}
      </div>
    </nav>
  );
}
