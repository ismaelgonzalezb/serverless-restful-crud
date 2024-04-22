import dotenv from "dotenv";

if (process.env["NODE_ENV"] !== "production") {
  dotenv.config();
}
export class Configuration {
  static get(key) {
    if (!process.env[key]) {
      console.error(`Missing key property ${key}`);
      process.exit(1);
    }
    return process.env[key];
  }
}
