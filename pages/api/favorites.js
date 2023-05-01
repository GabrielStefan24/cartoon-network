import client from "@/library/prismadb";
import { userData } from "@/library/userData";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }
  try {
    const { user } = await userData(req, res);
    const favoriteMovies = await client.movie.findMany({
      where: {
        id: {
          in: user?.favoriteIds,
        },
      },
    });
    console.log(favoriteMovies);
    return res.status(200).json(favoriteMovies);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
