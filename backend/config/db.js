import mongoose from "mongoose";

export const connectDB = async () => {
  const connect = await mongoose.connect(
    `mongodb://localhost:27017/management_db`,
  );
  console.log("MongoDB connected");
};
