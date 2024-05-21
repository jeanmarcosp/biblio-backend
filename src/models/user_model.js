import mongoose, { Schema } from "mongoose";

export const post_states = {
  IN_PROGRESS: "IN_PROGRESS",
  CLOSED: "CLOSED",
  GAME_OVER: "GAME_OVER",
  OPEN: "OPEN",
};

const user_schema = new Schema(
  {
    username: String,
    email: String,
    password: String,
    uploadedBooks: [
      {
        bookId: Schema.Types.ObjectId,
        uploadDate: Date
      }
    ],
    tradeRequests: [
      {
        requestedBookId: Schema.Types.ObjectId,
        status: String,
        requestedDate: Date
      }
    ]
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  }
);

const post_model = mongoose.model("Post", post_schema);

export default post_model;
