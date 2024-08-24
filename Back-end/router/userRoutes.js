import { Router } from "express";
import {
  createUser,
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
  logIn,
} from "../controller/userController.js";

const userRouter = Router();

userRouter.route("/create").post(createUser);
userRouter.route("/signIn").post(logIn);
userRouter.route("/getAll").get(getAllUsers);
userRouter.route("/get/:id").get(getUserByID);
userRouter.route("/update/:id").put(updateUserByID);
userRouter.route("/delete/:id").delete(deleteUserByID);

export default userRouter;
