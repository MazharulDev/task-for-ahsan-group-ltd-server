import { User } from "../users/user.model";
import { IMovies } from "./movies.interface";
import { Movie } from "./movies.model";

const createMovie = async (payload: IMovies): Promise<IMovies> => {
  const movie = await Movie.create(payload);
  const populatedMovie = await movie.populate("author");
  const authorId = populatedMovie.author._id;

  await User.findByIdAndUpdate(authorId, {
    $push: { movies: { $each: [populatedMovie._id], $position: 0 } },
  });

  return populatedMovie;
};

export const MovieService = {
  createMovie,
};
