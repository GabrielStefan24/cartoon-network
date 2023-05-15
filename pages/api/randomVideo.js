import client from "@/library/prismadb";
import { userData } from "@/library/userData";

export default async function handler(req, res) {

  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }
    await userData(req, res);

    // Generate a random index between 0 and 3 (inclusive)
    const randomIndex = Math.floor(Math.random() * 4);

    const randomMovies = await client.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return res.status(200).json(randomMovies[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}
