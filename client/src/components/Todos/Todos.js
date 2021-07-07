import React from "react";
import useStyles from "./style";

import { Container, Grid } from "@material-ui/core";

import Todo from "./Todo/Todo";

const todosArr = [
    { title: "Walk Dog", description: "Walk dog around the neighborhood", id: "123" },
];

const Todos = () => {
    const classes = useStyles();
    return (
        <Container className={classes.todoGrid} maxWidth="md">
            TODOS:
            <Grid container>
                {todosArr.map((todoObj) => (
                    <Todo {...todoObj} key={todoObj.id} />
                ))}
            </Grid>
        </Container>
    );
};

export default Todos;
