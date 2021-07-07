import mongoose from "mongoose";
import PostTodo from "../model/postTodo.js";

export const getTodos = async (req, res) => {
    try {
        const allTodos = await PostTodo.find();
        res.status(200).json(allTodos);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createTodo = async (req, res) => {
    const todo = req.body;
    const newTodo = new PostTodo(todo);

    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
