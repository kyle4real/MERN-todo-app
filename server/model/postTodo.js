import mongoose from "mongoose";
import moment from "moment";

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: "Task is required",
    },
    description: {
        type: String,
        required: "Description is required",
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        default: new Date(`${moment().endOf("day").format(`YYYY-MM-DDTHH:mm:ss`)}Z`),
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const PostTodo = mongoose.model("PostTodo", todoSchema);

export default PostTodo;
