import Head from "next/head";
import "../styles/globals.css";
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";

type Session = {
  user: {
    name: string;
    email: string;
  };
  expires: string;
};

type AppProps = {
  children: React.ReactNode;
  session: Session;
};

export default function RootLayout({ children, session }: AppProps) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Prisma - nextauth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body suppressHydrationWarning={true}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Typescript Next.js Starter",
  description: "A starter template for TypeScript and Next.js",
};
