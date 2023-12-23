import mongoose, { Schema, model } from "mongoose";
import { IMovies, MoviesModel } from "./movies.interface";

export const MovieSchema = new Schema<IMovies, MoviesModel>(
  {
    name: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    mainImg: {
      type: String,
      required: true,
    },
    secendImg: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
    creator: {
      type: String,
      required: true,
    },
    rate: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Movie = model<IMovies, MoviesModel>("Movie", MovieSchema);
