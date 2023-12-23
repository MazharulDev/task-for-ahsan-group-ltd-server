/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";
import { IUser } from "../users/user.interface";

export type IMovies = {
  name: string;
  author: {
    type: Types.ObjectId | IUser;
    _id: Types.ObjectId;
  };
  mainImg: string;
  secendImg: string;
  des: string;
  creator: string;
  rate: any;
};

export type MoviesModel = Model<IMovies, Record<string, unknown>>;
// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type IMoviesFilters = {
  searchTerm?: string;
  name?: string;
};
