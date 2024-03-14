// Index Page
const index = (req, res) => {
  res.render("layout", {
    title: "Homepage",
    content: "./pages/home.ejs",
  });
};

export default index;
