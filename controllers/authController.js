const authController = require("express").Router();
const userService = require("../services/userService");
const { parseError } = require("../util/parser");

authController.get("/register", (req, res) => {
  // TODO Replace with actual view by assignment
  res.render("register", {
    title: "Register Page",
  });
});

authController.post("/register", async (req, res) => {
  try {
    if (req.body.username == "" || req.body.password == "" || req.body.repass == "") {
      throw new Error("All fields are required");
    }
    if (req.body.password !== req.body.repass) {
      throw new Error("Passwords must match!");
    }

    const token = await userService.register(
      req.body.username,
      req.body.password,
    );

    res.cookie("token", token);
    res.redirect("/auth/register");

  } catch (error) {
    const errors = parseError(error);

    res.render("register", {
      //TODO add error display to actual template from assignment
      title: "Register Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});

module.exports = authController;
