import React, { useState, useEffect } from "react";
import useStyles from "./style";
import * as api from "../../api/index";

import { Container, Grid, CircularProgress } from "@material-ui/core";

import Todo from "./Todo/Todo";
import { deleteTodo } from "../../api";

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

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };

    return (
        <Container className={classes.todoGrid} maxWidth="md">
            {!todos.length && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress color="primary" />
                </div>
            )}
            <Grid container spacing={4}>
                {todos.map((todoObj) => (
                    <Todo {...todoObj} key={todoObj.id} handleDelete={handleDelete} />
                ))}
            </Grid>
        </Container>
    );
};

export default Todos;
