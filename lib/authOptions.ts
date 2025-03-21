import CredentialsProvider from "next-auth/providers/credentials";
import { getUserForLogin } from "@/actions/queries";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any) {
        try {
          // Gọi API WooCommerce để xác thực
          const user = await getUserForLogin({
            email: credentials?.email || "",
            password: credentials?.password || "",
          });

          if (user.email) {
            // Trả về user object với token
            return {
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              email: user.email,
            };
          }

          return null;
        } catch (error) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      // Nếu user đăng nhập, cập nhật thông tin user vào token
      if (user) {
        token.id = user.id;
        token.first_name = user.first_name;
        token.last_name = user.last_name;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Truyền dữ liệu từ token vào session để gửi đến client
      session.user = {
        id: token.id,
        first_name: token.first_name,
        last_name: token.last_name,
        email: token.email,
      };
      return session;
    },
  },
  pages: {
    signIn: "/account/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
