import User from "../models/userModel.js";
import jwt from 'jsonwebtoken';

// utils imports
import { hashPassword, comparePassword } from "../utils/auth.js";
const JTW_EXPIRATION = { expiresIn: '1h'};

export const getAllUser = async (req, res) => {
  try {
    const allFetchedUsers = await User.find().populate('totalJokes');

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
  const { fName, lName, role, phoneNumber, password } = req.body;
  try {
    const newUser = new User({
      fName,
      lName,
      role,
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
      const foundUser = await User.getUserWithPassword({phoneNumber});
      console.log("USER FOUND IS: " + foundUser);
      if(!foundUser) {
        res.status(404).json({
          status: "404",
          message: "Error: User Not Found"
        })
      }
      const isAuth = await comparePassword(password, foundUser.password);
      if(!isAuth) {
        res.status(404).json({
          status: "404",
          message: "Error: phone number or password dont match"
        })
      }

      const { _id, fName, lName, role} = foundUser;
      const filteredUser = {
        _id, fName, lName, phoneNumber, role
      }
      // Send JWT
      const token = jwt.sign(
        filteredUser,
        process.env.JWT_KEY,
        JTW_EXPIRATION
      )

      res.status(200).json(token);
    } catch (error) {
        res.status(401).json({error: "phone number or password dont match"});
    }
}

export const getUserById = async (req, res) => {
  try {
    const foundUser = await User.findById(req.params.id).populate("userJokes")
    res.send(foundUser)
  } catch (error) {
    res.status(500);
  }
};

