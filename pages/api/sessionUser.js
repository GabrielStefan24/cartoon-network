import { userData } from "@/library/userData";

export default async function handler(req, res) {
  try {
    const user = await userData(req);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(401).send(error.message);
  }
}
