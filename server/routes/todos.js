import express from "express";
import { createTodo, getTodos } from "../controllers/todos.js";

const router = express.Router();

router.route("/").get(getTodos);
router.route("/").post(createTodo);

export default router;
