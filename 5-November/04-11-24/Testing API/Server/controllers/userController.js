import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
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
    const hashedPassword = await hashPassword(password)

    // console.log(hashedPassword);
    
    const newUser = new User({
      fName,
      lName,
      phoneNumber,
      password: hashedPassword
    });

    await newUser.save();

    res.status(201).send({
      status: "success",
      message: "User Succefully Regitered",
      data: newUser,
    });
  } catch (error) {
    if (error?.errorResponse?.code === 11000) {
      res.status(400).send(error.errorResponse.errmsg);
    }
    res.status(500).send(error);
  }
};

export const signInUser = async (req, res) => {
    try {
        res.status(200).send("Not Implemented yet")
    } catch (error) {
        res.status(500)
    }
}

async function hashPassword(userPassword) {
    const saltRounds = 10
    const secretKey = process.env.ENCYPTION_SECRET
    const combinedPassword = userPassword + secretKey

    console.log(combinedPassword);
    
    const hashedPassword = await bcrypt.hash(combinedPassword, saltRounds)
    return hashedPassword
}