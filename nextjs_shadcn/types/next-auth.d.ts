import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface User {
    id: string;
    name: string?;
    email: string;
    image: string?;
    role: string;
  }
  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    name: string?;
    email: string;
    image: string?;
    role: string;
  }
}
