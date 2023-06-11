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
    if (
      req.body.username == "" ||
      req.body.password == "" ||
      req.body.repass == ""
    ) {
      throw new Error("All fields are required");
    }
    if (req.body.password !== req.body.repass) {
      throw new Error("Passwords must match!");
    }

    //TODO check assignment to see if register creates session
    const token = await userService.register(
      req.body.username,
      req.body.password
    );

    res.cookie("token", token);
    //TODO check the correct redirect
    res.redirect("/");
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

authController.get("/login", (req, res) => {
  res.render("login", {
    title: "Login Page",
  });
});

authController.post("/login", async (req, res) => {
  try {
    const token = await userService.login(req.body.username, req.body.password);

    res.cookie('token', token); 
    //TODO check the correct redirect
    res.redirect('/') 
  } catch (error) {
    const errors = parseError(error);

    res.render("login", {
      title: "Login Page",
      errors,
      body: {
        username: req.body.username,
      },
    });
  }
});


authController.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/')
});

module.exports = authController;
