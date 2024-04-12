import mongoose from "mongoose";
import { Client } from "./Client.js";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Client,
  },
});

export const Project = mongoose.model("Project", ProjectSchema);
