import React, { useState, useEffect } from "react";
import { fetchTodos } from "./api/index";

import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await fetchTodos();
            setTodos(data);
        };
        getData();
    }, []);

    return (
        <div>
            <TodoForm setTodos={setTodos} todos={todos} />
            <Todos setTodos={setTodos} todos={todos} />
        </div>
    );
};

export default App;
