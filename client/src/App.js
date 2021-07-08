import React from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import Todos from "./components/Todos/Todos";

const App = () => {
    return (
        <div>
            <TodoForm />
            <Todos />
        </div>
    );
};

export default App;
