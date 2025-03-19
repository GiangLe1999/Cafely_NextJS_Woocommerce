import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    userId?: string;
    user: {
      id?: string;
    } & DefaultSession["user"];
  }

  interface User {
    token?: string;
  }
}
