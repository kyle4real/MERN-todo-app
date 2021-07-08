import React, { useState, useEffect } from "react";
import useStyles from "./style";
import * as api from "../../api/index";

import { Container, Grid, CircularProgress } from "@material-ui/core";

import Todo from "./Todo/Todo";

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
            {!todos.length && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress color="primary" />
                </div>
            )}
            <Grid container spacing={4}>
                {todos.map((todoObj) => (
                    <Todo {...todoObj} key={todoObj.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default Todos;
