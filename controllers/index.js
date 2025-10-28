const Todo = require("../models");


const createTodo = async (req, res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: "Failed to create todo" });
    }
};


const getAllTodos = async (req, res) => {
	try {
		const { id } = req.query;

		if (id) {
			// If ID is passed in query, fetch that specific todo
			const todo = await Todo.findById(id);
			if (!todo) {
				return res.status(404).json({ error: "Todo not found" });
			}
			return res.status(200).json(todo);
		}

		// Otherwise return all todos
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (error) {
		res.status(500).json({ error: "Failed to retrieve todos" });
	}
};

const updateTodo = async (req, res) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json(todo);
    } catch (error) {
        res.status(500).json({ error: "Failed to update todo" });
    }
};

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.query;
        const todo = await Todo.findByIdAndDelete(id);
        if (!todo) {
            return res.status(404).json({ error: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete todo" });
    }
};

module.exports = {
	createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo
};