import axios from "axios";

const url = "http://localhost:5000/todos";

export const fetchTodos = async () => {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
};

export const createTodo = async (newTodo) => {
    try {
        const response = await axios.post(url, newTodo);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
