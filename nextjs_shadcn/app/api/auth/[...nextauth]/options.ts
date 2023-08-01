import { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GithubProvider({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          id: profile?.id.toString(),
          name: profile?.name ?? profile?.login ?? "Name not found",
          email: profile?.email ?? "example@gmail.com",
          image:
            profile?.avatar_url ??
            "https://avatars.githubusercontent.com/u/7525670?v=4",
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "name",
          type: "text",
          placeholder: "name...",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password...",
        },
        role: {
          label: "Role",
          type: "text",
          placeholder: "Role...",
        },
      },
      async authorize(credentials, req) {
        const { name, password, role } = credentials as any;

        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          body: JSON.stringify({ name, password, role }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, user }: any) {
      session.user.role = user.role;
      return session;
    },
  },
  // pages: {
  //   signIn: "/login",
  //   signOut: "/auth/signout",
  // },
};
