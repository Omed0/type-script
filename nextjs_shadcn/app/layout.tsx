import "../styles/globals.css";
import { Metadata } from "next";

// type AppProps = {
//   children: React.ReactNode;
//   session: any;
// };
type AppProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: AppProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Prisma - nextauth",
  description: "Prisma - nextauth",
};
