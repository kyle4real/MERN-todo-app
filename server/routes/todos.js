import express from "express";
import { deleteTodo, createTodo, getTodos } from "../controllers/todos.js";

const router = express.Router();

router.route("/").get(getTodos);
router.route("/").post(createTodo);
router.route("/:id").delete(deleteTodo);

export default router;
