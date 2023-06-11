const homeController = require("express").Router();

// TODO Replace by real conreoller by assigment
homeController.get("/", async (req, res) => {
  const user = await req.user

  res.render("home", {
    title: "Home Page",
    user
  });
});

module.exports = homeController;
