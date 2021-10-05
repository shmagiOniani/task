import { Main, Post, Edit } from "../Pages";

export const routes = [
  {
    path: "/Main",
    component: Main,
  },
  {
    path: "/Post/:id",
    component: Post,
  },
  {
    path: "/Edit/:id",
    component: Edit,
  },
];
