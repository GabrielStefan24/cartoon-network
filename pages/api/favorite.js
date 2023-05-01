import client from "@/library/prismadb";
import { userData } from "@/library/userData";
export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { user } = await userData(req, res);
      const { movieId } = req.body;
      const existingMovie = await client.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) {
        throw new Error("Wrong ID");
      }
      const updatedUserPost = await client.user.update({
        where: {
          email: user.email,
        },
        data: {
          favoriteIds: {
            push: movieId,
          },
        },
      });
      return res.status(200).json(updatedUserPost);
    }
    if (req.method === "DELETE") {
      const { user } = await userData(req);
      const { movieId } = req.body;
      const existingMovie = await client.movie.findUnique({
        where: {
          id: movieId,
        },
      });
      if (!existingMovie) {
        throw new Error("Wrong ID");
      }
      const updatedUserDelete = await client.user.update({
        where: {
          email: user.email,
        },
        data: {
          favoriteIds: {
            set: user.favoriteIds.filter((id) => id !== movieId),
          },
        },
      });
      return res.status(200).json(updatedUserDelete);
    }
    return res.status(405).end();
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
