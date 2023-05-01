import { getServerSession } from "next-auth";
import client from "./prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export async function userData(req, res) {
  const session = await getServerSession(req, res, authOptions);

  if (!session?.user?.email) {
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
