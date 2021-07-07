import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    task: String,
    description: String,
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dueDate: Date,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const PostTodo = mongoose.model("PostTodo", todoSchema);

export default PostTodo;
