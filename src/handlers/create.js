import { DataBaseServices } from "../ports/mongodb/db.js";

export const create = async (event) => {
  try {
    await DataBaseServices.connect();
    const newUser = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: JSON.stringify(event.body),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(`::LAMBDA HANLDER ERROR ::`, err),
    };
  }
};
