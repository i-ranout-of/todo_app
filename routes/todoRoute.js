const { Router } = require("express");
const router = Router();
const todoController = require("../controllers");

router.post("/", todoController.createTodo);
router.get("/", todoController.getAllTodos);
router.patch("/", todoController.updateTodo);
router.delete("/", todoController.deleteTodo);


module.exports = router;