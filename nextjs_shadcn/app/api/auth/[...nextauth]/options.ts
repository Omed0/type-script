import { type NextAuthOptions } from "next-auth";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export const options: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma) as NextAuthOptions["adapter"],
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email...",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password...",
        },
      },
      async authorize(credentials, req): Promise<User | null> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (user!) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      console.log("Callback session", session, token, user);
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log("Callback jwt", token, user, account, profile);
      return token;
    },
  },
  secret: process.env.SECRET,
  logger: {
    error(code, ...message) {
      console.log(code, message);
    },
    warn(code, ...message) {
      console.log(code, message);
    },
    debug(code, ...message) {
      console.log(code, message);
    },
  },
  // pages: {
  //   signIn: "/login",
  //   signOut: "/auth/signout",
  // },
};
