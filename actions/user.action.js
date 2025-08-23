"use server";
import connectDB from "@/lib/db";
import { User } from "@/models/user.model";

export const createUser = async (user) => {
  try {
    await connectDB();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log("Error creating user", error);
  }
};
