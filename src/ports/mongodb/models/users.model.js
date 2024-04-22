import mongoose from "mongoose";
import { UserSchema } from "../schemas/users.schema.js";

export const UserRepository = mongoose.model("User", UserSchema);
