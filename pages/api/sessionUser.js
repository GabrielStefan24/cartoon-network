import { userData } from "@/library/userData";

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    const { user } = await userData(req, res);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}