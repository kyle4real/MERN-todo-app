import React, { useState, useEffect } from "react";
import useStyles from "./style";
import * as api from "../../api/index";

import { Container, Grid } from "@material-ui/core";

import Todo from "./Todo/Todo";

const todosArr = [
    { title: "Walk Dog", description: "Walk dog around the neighborhood", id: "123" },
    { title: "Eat Snack", description: "PB2 snack, yogurt snack", id: "456" },
    { title: "Light jog", description: "Jog at park", id: "789" },
];

const Todos = () => {
    const classes = useStyles();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const { data } = await api.fetchTodos();
            setTodos(data);
        };
        getData();
    }, []);

    return (
        <Container className={classes.todoGrid} maxWidth="md">
            <Grid container spacing={4}>
                {todos.map((todoObj) => (
                    <Todo {...todoObj} key={todoObj.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default Todos;
