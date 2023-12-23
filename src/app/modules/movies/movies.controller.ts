import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { MovieService } from "./movies.service";
import sendResponse from "../../../shared/sendResponse";
import { IMovies } from "./movies.interface";
import httpStatus from "http-status";

const createMovie = catchAsync(async (req: Request, res: Response) => {
  const { ...movieData } = req.body;
  const result = await MovieService.createMovie(movieData);
  sendResponse<IMovies>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "movie created successfully",
    data: result,
  });
});
const getAllMovie = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieService.getAllMovie();
  sendResponse<IMovies[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "movie all fetched successfully",
    data: result,
  });
});

export const MovieController = {
  createMovie,
  getAllMovie,
};
