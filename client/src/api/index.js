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
        const { data } = await axios.post(url, newTodo);
        return data._id;
    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = async (id) => {
    try {
        await axios.delete(`${url}/${id}`);
    } catch (error) {
        console.log(error);
    }
};
