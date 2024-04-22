import { DataBaseServices } from "../ports/mongodb/db.js";
import { UserRepository } from "../ports/mongodb/models/users.model.js";

export const findOne = async (event) => {
  try {
    await DataBaseServices.connect();

    const { id } = event.pathParameters;
    const userId = await UserRepository.findById(id);

    if (!userId) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found!" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(userId),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
