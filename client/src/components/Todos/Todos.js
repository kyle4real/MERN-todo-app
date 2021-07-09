import React from "react";
import useStyles from "./style";

import { Container, Grid, CircularProgress } from "@material-ui/core";

import Todo from "./Todo/Todo";
import CompletedTodo from "./CompletedTodo/CompletedTodo";
import { deleteTodo } from "../../api";

const Todos = ({ setTodos, todos }) => {
    const classes = useStyles();

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };
    // console.log(todos.map((todo) => todo._id));
    return (
        <>
            <Container maxWidth="md" className={classes.todoContainer}>
                {!todos.length && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="primary" />
                    </div>
                )}
                <Grid container spacing={4} className={classes.todoGrid}>
                    {todos
                        .filter((todoObj) => !todoObj.isCompleted)
                        .map((todoObj) => (
                            <Todo
                                {...todoObj}
                                key={todoObj._id}
                                handleDelete={handleDelete}
                                todoObj={todoObj}
                                setTodos={setTodos}
                                todos={todos}
                            />
                        ))}
                </Grid>
            </Container>
            <Container maxWidth="md" className={classes.todoContainer}>
                <Grid container spacing={4} className={classes.todoGrid}>
                    {todos
                        .filter((todoObj) => todoObj.isCompleted)
                        .map((todoObj) => (
                            <CompletedTodo
                                {...todoObj}
                                key={todoObj._id}
                                handleDelete={handleDelete}
                            />
                        ))}
                </Grid>
            </Container>
        </>
    );
};

export default Todos;
