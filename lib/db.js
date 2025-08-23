import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    console.log("Database already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "tasks-connect",
      bufferCommands: false,
      timeoutMS: 30000,
    });

    isConnected = true;

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed - ", error);

    throw new Error("Failed to connect Database");
  }
};

export default connectDB;
