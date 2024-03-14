import { connection } from "../Database/database.js";

// Select Items
export const selectItems = async () => {
  try {
    return await connection.query("SELECT * FROM items");
  } catch (err) {
    console.log(err);
  }
};
