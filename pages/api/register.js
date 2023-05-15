import bcrypt from "bcrypt";
import client from "@/library/prismadb";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).end();
    }
    const { email, username, password } = req.body;
    const existingUser = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return res.status(422).json({ error: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await client.user.create({
      data: {
        email,
        username,
        hashedPassword,
        emailVerified: new Date(),
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}