// Get the client
import { createConnection } from "mysql2/promise";

// Create the connection to database
export const connection = await createConnection({
  host: "localhost",
  user: "root",
  database: "shop",
});
