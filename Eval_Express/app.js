// Requires
import express from "express";
import shopRoutes from "./routes/shopRoutes.js";
import indexRoutes from "./routes/indexRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

// Create express app
const app = express();

// Configuration
app.use(express.static("public"));

// Define port
const port = 3000;

// EJS
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes Configuration
app.use("/shop", shopRoutes); // Shop
app.use("/", indexRoutes); // Index
app.use("/cart", cartRoutes); // Cart

// Listening app with the port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
