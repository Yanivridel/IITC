import User from "../models/userModel.js";
// utils imports
import { hashPassword, comparePassword } from "../utils/auth.js";

export const getAllUser = async (req, res) => {
  try {
    const allFetchedUsers = await User.find();

    res.status(200).send({
      status: "success",
      message: "Users Found",
      data: allFetchedUsers,
    });
  } catch (error) {
    res.status(500);
  }
};

export const createUser = async (req, res) => {
  const { fName, lName, phoneNumber, password } = req.body;
  try {
    const newUser = new User({
      fName,
      lName,
      phoneNumber,
      password: await hashPassword(password)
    });

    await newUser.save();

    res.status(201).send({
      status: "success",
      message: "User Successfully Registered",
      data: newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
        return res.status(400).json({
            status: "error",
            message: "Phone number already exists",
        });
    }
    res.status(500).json({
        status: "error",
        message: "An unexpected error occurred",
        error: error.message,
    });
}
};

export const signInUser = async (req, res) => {
  const { password, phoneNumber } = req.body;
    try {
      const foundUser = await User.findOne({phoneNumber});
      const isAuth = await comparePassword(password, foundUser.password);

      res.status(200).json({IsAuth: isAuth});
    } catch (error) {
        res.status(401).json({error: "phone number or password dont match"});
    }
}

