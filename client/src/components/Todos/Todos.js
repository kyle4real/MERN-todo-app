import React from "react";
import useStyles from "./style";

import { Container, Grid } from "@material-ui/core";

import Todo from "./Todo/Todo";

const todosArr = [
    { title: "Walk Dog", description: "Walk dog around the neighborhood", id: "123" },
    { title: "Eat Snack", description: "PB2 snack, yogurt snack", id: "456" },
    { title: "Light jog", description: "Jog at park", id: "789" },
];

const Todos = () => {
    const classes = useStyles();
    return (
        <Container className={classes.todoGrid} maxWidth="md">
            <Grid container spacing={4}>
                {todosArr.map((todoObj) => (
                    <Todo {...todoObj} key={todoObj.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default Todos;
