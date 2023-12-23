/* eslint-disable no-unused-vars */
import { Model, Types } from "mongoose";

export type IUser = {
  name: string; //embedded object
  email: string;
  password: string;
  image?: string;
  role: string;
  phoneNumber: string;
  id?: string | null;
  _id?: string | null;
};
// export type UserModel = Model<IUser, Record<string, unknown>>;

// export type UserModel = Model<IUser, Record<string, unknown>>;
// export type UserModel = Model<IUser, Record<string, unknown>, IUserMethods>;

export type IUserFilters = {
  searchTerm?: string;
  email?: string;
  name?: string;
};
export type UserModel = {
  isUserExist(
    email: string
  ): Promise<Pick<IUser, "email" | "password" | "role">>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string
  ): Promise<boolean>;
} & Model<IUser>;
