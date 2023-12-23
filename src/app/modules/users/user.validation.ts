import { z } from "zod";

const createUserZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "name is required",
    }),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    image: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserZodSchema,
};
