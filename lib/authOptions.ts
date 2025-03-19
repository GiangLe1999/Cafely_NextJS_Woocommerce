import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "WooCommerce",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Gọi API WooCommerce để xác thực
          const response = await axios.post(
            `${process.env.WORDPRESS_URL}/wp-json/jwt-auth/v1/token`,
            {
              username: credentials?.email,
              password: credentials?.password,
            }
          );

          const user = response.data;

          if (user) {
            // Trả về user object với token
            return {
              id: user.user_id,
              name: user.user_display_name,
              email: user.user_email,
              token: user.token,
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
      // Lưu token JWT từ WooCommerce vào NextAuth JWT
      if (user) {
        token.accessToken = user.token;
        token.userId = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      // Gửi thông tin token đến client
      session.accessToken = token.accessToken;
      session.userId = token.userId;
      return session;
    },
  },
  pages: {
    signIn: "/account/login",
    signUp: "/account/register",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
