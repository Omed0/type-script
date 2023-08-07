import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

//auth in server side
export async function LoginIsRequiredInServerSide() {
  const session = await getServerSession(options);
  if (!session) redirect("/api/auth/signin");

  return session;
}

//auth in client side
export function LoginIsRequiredInClientSide() {
  if (typeof window !== "undefined") {
    const session = useSession();
    if (!session) redirect("/api/auth/signin");

    return session;
  }
}
