import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import todosRoutes from "./routes/todos.js";

connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("HELLO THERE");
});

app.use("/todos", todosRoutes);

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
