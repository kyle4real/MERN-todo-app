import React from "react";
import useStyles from "./style";

import { Container, Grid, CircularProgress, Typography } from "@material-ui/core";

import Todo from "./Todo/Todo";
import CompletedTodo from "./CompletedTodo/CompletedTodo";
import { deleteTodo, editTodo } from "../../api";

const Todos = ({ setTodos, todos, fetching }) => {
    const classes = useStyles();

    const handleDelete = async (id) => {
        await deleteTodo(id);
        setTodos(todos.filter((todo) => todo._id !== id));
    };
    const handleCompletedUpdate = async (id, isCompleted) => {
        const completedAt = isCompleted ? Date.now() : null;
        const newTodo = await editTodo(id, { isCompleted, completedAt });
        setTodos(todos.map((current) => (current._id !== id ? current : newTodo)));
    };
    return (
        <>
            <Container maxWidth="md" className={classes.todoContainer}>
                {fetching && (
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <CircularProgress color="primary" />
                    </div>
                )}
                <Grid container spacing={4} className={classes.todoGrid}>
                    {todos.length
                        ? todos
                              .filter((todoObj) => !todoObj.isCompleted)
                              .map((todoObj) => (
                                  <Todo
                                      {...todoObj}
                                      key={todoObj._id}
                                      handleDelete={handleDelete}
                                      handleCompletedUpdate={handleCompletedUpdate}
                                      todoObj={todoObj}
                                      setTodos={setTodos}
                                      todos={todos}
                                  />
                              ))
                        : !fetching && (
                              <Grid item>
                                  <Typography component="p" variant="body2">
                                      No Todos
                                  </Typography>
                              </Grid>
                          )}
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
                                handleCompletedUpdate={handleCompletedUpdate}
                            />
                        ))}
                </Grid>
            </Container>
        </>
    );
};

export default Todos;
