import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const userByEmail = async (email: string): Promise<IUser | null> => {
  const result = await User.findOne({ email: email });
  return result;
};

export const UserService = {
  createUser,
  userByEmail,
};
