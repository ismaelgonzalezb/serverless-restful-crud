import mongoose from "mongoose";
import { Configuration } from "../../config/index.js";

export class DataBaseServices {
  static async connect() {
    try {
      const MONGO_URI = Configuration.get("MONGO_URI");
      mongoose.connect(MONGO_URI);
      console.debug("DATA_BASE_SERVICE.CONNECT.SUCCESS ");
    } catch (error) {
      console.debug("DATA_BASE_SERVICE.CONNECT.ERROR ", error);
    }
  }
}
