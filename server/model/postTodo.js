import mongoose from "mongoose";
import moment from "moment";

const todoSchema = mongoose.Schema({
    task: {
        type: String,
        required: "Task is required",
        trim: true,
    },
    description: {
        type: String,
        required: "Description is required",
        trim: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    completedAt: {
        type: Date,
        default: null,
    },
});

const PostTodo = mongoose.model("PostTodo", todoSchema);

export default PostTodo;
