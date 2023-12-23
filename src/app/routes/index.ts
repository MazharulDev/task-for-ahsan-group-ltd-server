import express from "express";
import { UserRoutes } from "../modules/users/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { MovieRoutes } from "../modules/movies/movies.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/movies",
    route: MovieRoutes,
  },
];
modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
