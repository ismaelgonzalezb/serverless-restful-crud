import { DataBaseServices } from "../ports/mongodb/db.js";
import { UserRepository } from "../ports/mongodb/models/users.model.js";

export const update = async (event) => {
  try {
    await DataBaseServices.connect();

    const { id } = event.pathParameters;
    const { body } = event;

    const updated = await UserRepository.findByIdAndUpdate(
      id,
      JSON.parse(body),
      { new: true }
    );

    if (!updated) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "User not found!" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(updated),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
