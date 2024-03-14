// Panier Page
const cart = (req, res) => {
  res.render("layout", {
    title: "Panier",
    content: "./pages/cart.ejs",
  });
};

export default cart;
