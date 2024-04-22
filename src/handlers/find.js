import { DataBaseServices } from "../ports/mongodb/db.js";
import { UserRepository } from "../ports/mongodb/models/users.model.js";

export const find = async (event) => {
  try {
    await DataBaseServices.connect();

    const users = await UserRepository.find();

    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
