import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        fullname: { label: "Full Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulasi data user (nantinya bisa diganti dengan query ke database)
        const user = {
          id: "1",
          email: credentials?.email,
          password: credentials?.password,
          fullname: credentials?.fullname,
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile, user }: any) {
      if (account?.provider === "credentials" && user) {
        token.email = user.email;
        token.fullname = user.fullname; // Menambahkan fullname ke token jika diperlukan
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token.email && session.user) {
        session.user.email = token.email;
        session.user.fullname = token.fullname; // Mengirim fullname ke session client-side
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);