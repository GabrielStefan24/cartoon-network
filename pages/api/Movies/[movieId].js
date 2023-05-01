import client from "@/library/prismadb";
import { authOptions } from "../auth/[...nextauth]";
export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).end();
    }

    await authOptions(req, res);

    const { movieId } = req.query;

    if (typeof movieId !== "string") {
      throw new Error("Invalid Id");
    }

    if (!movieId) {
      throw new Error("Missing Id");
    }

    const movies = await client.movie.findUnique({
      where: {
        id: movieId,
      },
    });

    return res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}