import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

export const Client = mongoose.model("Client", ClientSchema);
