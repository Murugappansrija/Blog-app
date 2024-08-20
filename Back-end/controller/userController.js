import { Types } from "mongoose";
import UserModel from "../model/userModel.js";
import Response from "./../utils/response.js";
import bcrypt from "bcrypt";
const userController = {
  /**Get All Users */

  getAllUsers: async (req, res) => {
    try {
      const getAllUsers = await UserModel.find();

      if (getAllUsers) {
        if (getAllUsers.length === 0) {
          return userController.sendResponse(
            res,
            204,
            "No Data Found In Users Collection",
            []
          );
        }

        return userController.sendResponse(
          res,
          200,
          "User Data Fetched Successfully",
          getAllUsers
        );
      }

      return userController.sendResponse(res, 404, "Failed To Fetch Users", []);
    } catch (error) {
      return userController.sendResponse(
        res,
        500,
        "Internal Server Error, Kindly Please try Again.",
        error.message
      );
    }
  },
  /**Create User */
  createUser: async (req, res) => {
    try {
      const requiredFields = ["email_id", "user_name", "password"];
      const { email_id, user_name, password } = req.body;

      if (!userController.checkRequiredField(req.body, requiredFields)) {
        return userController.sendResponse(
          res,
          400,
          "Invalid Data Format Please Check!..",
          req.body
        );
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const createUser = await UserModel.create({
        email_id,
        password: hashPassword,
        user_name,
      });

      if (createUser) {
        createUser.password = undefined;
        return userController.sendResponse(
          res,
          200,
          "User Register Successfully",
          createUser
        );
      }

      return userController.sendResponse(
        res,
        404,
        "Failed To Add New Users",
        req.body
      );
    } catch (error) {
      console.log(error);
      if (error.keyPattern.email_id) {
        return userController.sendResponse(
          res,
          409,
          "EmailID is Already exists  ",
          error.message
        );
      }
      return userController.sendResponse(
        res,
        500,
        "Internal Server Error, Kindly Please try Again.",
        error.message
      );
    }
  },

  /**Get User Based on Id */

  getUserByID: async (req, res) => {
    try {
      const userID = req.params.id;

      if (!req.params || !userID || !Types.ObjectId.isValid(userID)) {
        return userController.sendResponse(
          res,
          400,
          "Invalid Data Format Please Check!..",
          userID
        );
      }

      const getUserByID = await UserModel.findById(userID);

      if (getUserByID) {
        if (getUserByID.length === 0) {
          return userController.sendResponse(
            res,
            204,
            "No Data Found In Users Collection",
            []
          );
        }

        return userController.sendResponse(
          res,
          200,
          "User Data Fetched Successfully",
          getUserByID
        );
      }

      return userController.sendResponse(res, 404, "Failed To Fetch Users", []);
    } catch (error) {
      return userController.sendResponse(
        res,
        500,
        "Internal Server Error, Kindly Please try Again.",
        error.message
      );
    }
  },

  /**Update Users */

  updateUserByID: async (req, res) => {
    try {
      const userID = req.params.id;

      const { user_name, email_id, password } = req.body;

      const requiredFields = ["email_id", "password", "user_name"];

      if (
        !req.params ||
        !userID ||
        !Types.ObjectId.isValid(userID) ||
        !userController.checkSomeRequiredField(req.body, requiredFields)
      ) {
        return userController.sendResponse(
          res,
          400,
          "Invalid Data Format Please Check!..",
          userID
        );
      }

      const salting = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salting);
      const updatedData = { user_name, email_id, password: hashPassword };

      const updateUserByID = await UserModel.findOneAndUpdate(
        { _id: userID },
        updatedData,
        { new: true }
      );

      if (updateUserByID) {
        return userController.sendResponse(
          res,
          200,
          "User Updated Successfully",
          updateUserByID
        );
      }
    } catch (error) {
      return userController.sendResponse(
        res,
        500,
        "Internal Server Error, Kindly Please try Again.",
        error.message
      );
    }
  },

  deleteUserByID: async (req, res) => {
    try {
      const userID = req.params.id;

      if (!req.params || !userID || !Types.ObjectId.isValid(userID)) {
        return userController.sendResponse(
          res,
          400,
          "Invalid Data Format Please Check!..",
          userID
        );
      }
      const deleteUserByID = await UserModel.findByIdAndDelete(userID);

      return userController.sendResponse(
        res,
        200,
        "User Deleted Successfully",
        deleteUserByID
      );
    } catch (error) {
      return userController.sendResponse(
        res,
        500,
        "Internal Server Error, Kindly Please try Again.",
        error.message
      );
    }
  },

  /**Response */
  sendResponse: (dataResponse, statusCode, message, data) => {
    const response = new Response(statusCode, message, data);
    dataResponse.status(statusCode).send(response);
  },

  /**Check Required Fields */
  checkRequiredField: (data, requiredFields) => {
    return requiredFields.every((fields) => data[fields]);
  },

  /**Check Required Fields */
  checkSomeRequiredField: (data, requiredFields) => {
    return requiredFields.some((fields) => data[fields]);
  },
};

export const {
  createUser,
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = userController;
