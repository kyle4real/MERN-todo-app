import React, { useState, useEffect } from "react";
import { fetchTodos } from "./api/index";

import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const { data } = await fetchTodos();
            setTodos(data);
            setFetching(false);
        };
        getData();
    }, []);

    return (
        <div>
            <TodoForm setTodos={setTodos} todos={todos} />
            <Todos setTodos={setTodos} todos={todos} fetching={fetching} />
        </div>
    );
};

export default App;
