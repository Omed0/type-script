import "../styles/globals.css";
import NextAuthSessionProvider from "../components/provider/NextAuthSessionProvider";
import { Metadata } from "next";

type AppProps = {
  children: React.ReactNode;
  session: any;
};

export default function RootLayout({ children, session }: AppProps) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider session={session}>
          {children}
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Prisma - nextauth",
  description: "Prisma - nextauth",
};
