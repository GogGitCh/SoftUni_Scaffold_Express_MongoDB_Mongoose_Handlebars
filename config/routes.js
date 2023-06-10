const authController = require("../controllers/authController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);

//   // Global error handling -----------------------
//   app.get("/error", (req, res, next) => {
//     next(new Error("Propagating error")); // Option 1
//     // throw new Error("Propagating error"); // Option 2
//   });

//   app.use((err, req, res, next) => {
//     console.log("Global error handling");
//     console.log(err.message);

//     res.redirect("/");
//   });
//   // Global error handling -----------------------


};
