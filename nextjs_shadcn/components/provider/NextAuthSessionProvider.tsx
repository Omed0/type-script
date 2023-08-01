"use client";
import { SessionProvider } from "next-auth/react";

type AppProps = {
  children: React.ReactNode;
  session: any;
};

export default function NextAuthSessionProvider({
  children,
  session,
}: AppProps) {
  // const { data: session, status } = useSession();
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
