import client from "@/library/prismadb";
import { userData } from "@/library/userData";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    await userData(req);
    const count = await client.movie.count();
    const randomIndex = Math.floor(Math.random() * count);

    const randomMovies = await client.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
