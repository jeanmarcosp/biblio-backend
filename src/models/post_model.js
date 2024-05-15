import mongoose, { Schema } from "mongoose";

export const post_states = {
  IN_PROGRESS: "IN_PROGRESS",
  CLOSED: "CLOSED",
  GAME_OVER: "GAME_OVER",
  OPEN: "OPEN",
};

const post_schema = new Schema(
  {
    title: String,
    tags: [String],
    description: String,
    coverUrl: String,
    author: String,
    comments: [{ body: String, date: Date }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const post_model = mongoose.model("Post", post_schema);

export default post_model;
