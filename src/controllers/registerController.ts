import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import userModel from '../models/userModel';
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from "../config/config";

const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;

  //   check validation
  if (!name || !email || !password) {
    const error = createHttpError(400, "All fields are required");
    return next(error);
  }

  //   check whether the user already exists or not

  try {
    const userExists = await userModel.findOne({ email }); // it returns null or document

    if (userExists) {
      const error = createHttpError(400, "User already exists with this email");
      return next(error);
    }

   
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.create({
      name,
      email,
      password: hashPassword,
    });

    const token = sign({ sub: newUser._id }, config.jwtSecret as string, {
      expiresIn: "7d",
    });

    res.status(201).json({ accessToken: token });


  } catch (error) {
    return next(createHttpError(500, "Error while getting user"));
  }
};

export default registerController;