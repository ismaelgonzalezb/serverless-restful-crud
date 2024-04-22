import { DataBaseServices } from "../ports/mongodb/db.js";
import { UserRepository } from "../ports/mongodb/models/users.model.js";

export const deleted = async (event) => {
  try {
    await DataBaseServices.connect();

    const { id } = event.pathParameters;

    const deleted = await UserRepository.findByIdAndDelete(id);

    if (!deleted) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found!" }),
      };
    }
    return {
      statusCode: 204,
      body: JSON.stringify(deleted),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
