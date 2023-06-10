const homeController = require("express").Router();

// TODO Replace by real conreoller by assigment
homeController.get("/", (req, res) => {
  res.render("home", {
    title: "Home Page",
  });
});

module.exports = homeController;
