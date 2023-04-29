import { getSession } from "next-auth/react";
import client from "./prismadb";

export async function userData(req) {
  const session = await getSession({ req });

  if (!session) {
    throw new Error("Not signed in");
  }

  const user = await client.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
