import bcrypt from "bcrypt";

import prismadb from "../../library/prismadb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  try {
    const { email, username, password } = req.body;
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
        username,
      },
    });
    if (existingUser) {
      return res.status(422).json({ error: "Email already in use" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        username,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
  }
}
