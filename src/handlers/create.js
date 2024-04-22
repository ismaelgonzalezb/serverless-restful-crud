import { DataBaseServices } from "../ports/mongodb/db.js";
import { UserRepository } from "../ports/mongodb/models/users.model.js";

export const create = async (event) => {
  try {
    await DataBaseServices.connect();
    const newUser = JSON.parse(event.body);
    await UserRepository.create(newUser);

    return {
      statusCode: 201,
      body: JSON.stringify({ message: "User successfully created" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
