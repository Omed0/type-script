"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

export default function navbar() {
  const { data: session } = useSession();
  return (
    <nav className="flex justify-between p-3 px-6 w-full ">
      <div className="flex gap-4">
        <Link href={"admin"}>
          <Button variant="outline">Admin</Button>
        </Link>
        {session?.user ? (
          <Button variant="outline" onClick={() => signOut()}>
            Sign Out
          </Button>
        ) : (
          <Button variant="outline" onClick={() => signIn()}>
            Sign In
          </Button>
        )}
      </div>
      <div>
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            alt="Picture of the author"
            width={50}
            height={50}
          />
        )}
        <h3 className="text-2xl font-semibold">{session?.user?.name}</h3>
      </div>
    </nav>
  );
}
