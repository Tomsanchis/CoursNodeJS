import { selectItems } from "../Models/shopModel.js";

// Shop Page
const shop = async (req, res) => {
  let allELement = await selectItems();
  res.render("layout", {
    title: "Shop",
    content: "./pages/shop.ejs",
    data: allELement[0],
  });
};

export default shop;
