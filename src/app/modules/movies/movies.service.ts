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

const getAllMovie = async (): Promise<IMovies[] | null> => {
  const result = await Movie.find({});
  return result;
};

export const MovieService = {
  createMovie,
  getAllMovie,
};
