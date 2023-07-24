import Head from "next/head";
import "../styles/globals.css";
import type { Metadata } from "next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Typescript Next.js Starter",
  description: "A starter template for TypeScript and Next.js",
};
