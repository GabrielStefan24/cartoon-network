import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import prismadb from "../../../library/prismadb";
import { compare } from "bcrypt";

export const authOptions = {
  providers: [
    Credentials({
      id: "crd",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password required");
        }
        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });
        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }

        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        );
        if (!isCorrectPassword) {
          throw new Error("Wrong password");
        }

        return { id: user.id, email: user.email, username: user.username };
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },

  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};
export default NextAuth(authOptions);
