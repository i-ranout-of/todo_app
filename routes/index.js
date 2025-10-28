const { Router } = require("express");
const router = Router();
const todoRoutes = require("./todoRoute");

router.use("/api/v1/todos", todoRoutes)

module.exports = router;