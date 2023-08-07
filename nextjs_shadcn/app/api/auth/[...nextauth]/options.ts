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
        email: {
          label: "email",
          type: "email",
          placeholder: "email...",
        },
      },
      async authorize(credentials, req): Promise<any> {
        const { email } = credentials as User;

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (user) return user;
        else return null;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }: any) => {
      console.log("JWT CallBack", { token, user });
      if (user) {
        return { ...token, id: user.id };
      }
    },

    session: async ({ session, token }: any) => {
      console.log("Session CallBack", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token?.id,
        },
      };
    },
  },

  // pages: {
  //   signIn: "/login",
  //   signOut: "/auth/signout",
  // },
};
