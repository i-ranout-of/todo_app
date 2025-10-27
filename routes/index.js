const { Router } = require("express");

const router = Router();
const Todo = require("../models");

// routes.get('/hello', (req, res) => {
    
// });

// router.get("/hello", async (req, res) => {
// 	try {
// 		const todos = await Todo.find();
//         console.log(todos);
// 		res.status(200).json(todos);
// 	} catch (error) {
// 		res.status(500).json({ error: "Failed to retrieve todos" });
// 	}
// });


// required routes
// get route -> get specific task
// getAll route -> getAll tasks
// post route -> create new task
// update route -> update specific task
// delete route -> delete specific task 

module.exports = router;