import mongoose from "mongoose";

let isConnected = false; // 연결상태를 추적하는 변수

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log("MONGODB_URI is not defined");

  if (isConnected) return console.log("=> using existing database connection");

  try {
    await mongoose.connect(process.env.MONGODB_URI, {});

    isConnected = true;

    console.log("=> mongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
