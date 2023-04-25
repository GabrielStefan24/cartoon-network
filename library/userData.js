import client from "@/library/prismadb";
import { getSession } from "next-auth/react";

export async function getUserData(context) {
  // Fetch the session from NextAuth
  const session = await getSession({ req: context.req, res: context.res });

  // Check if the session is valid
  if (!session) {
    return {
      user: null,
    };
  }

  // Fetch the user data from the Prisma client
  const user = await client.user.findUnique({
    where: { email: session.user.email },
    select: {
      id: true,
      username: true,
      image: true,
      email: true,
    },
  });

  // Return the user data
  return {
    user,
  };
}
