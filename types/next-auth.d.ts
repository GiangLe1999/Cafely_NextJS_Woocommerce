// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  }

  interface Session {
    user: User;
  }
}
