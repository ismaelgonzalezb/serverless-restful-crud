import { Schema } from "mongoose";

export const UserSchema = new Schema(
  {
    name: { type: String },
    age: { type: Number },
    email: { type: String },
    gender: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
