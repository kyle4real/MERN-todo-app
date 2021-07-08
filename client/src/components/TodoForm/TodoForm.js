import React, { useState } from "react";
import moment from "moment";

import { Container, TextField, Grid, Button } from "@material-ui/core";
import useStyle from "./style";

import { createTodo } from "../../api";

const initialTodo = {
    task: "",
    description: "",
    dueDate: moment().endOf("day").format(`YYYY-MM-DDTHH:mm:ss`),
};

const TodoForm = ({ todos, setTodos }) => {
    const classes = useStyle();
    const [todo, setTodo] = useState(initialTodo);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!todo.task || !todo.description) {
            return;
        }

        const _id = await createTodo(todo);
        setTodos([...todos, { ...todo, _id }]);
        setTodo(initialTodo);
    };

    return (
        <Container maxWidth="md">
            <form
                className={`${classes.form} ${classes.root}`}
                autoComplete="off"
                onSubmit={(e) => handleSubmit(e)}
            >
                <Grid
                    container
                    alignItems="stretch"
                    justifyContent="center"
                    spacing={3}
                    className={classes.formRow}
                >
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="task-input"
                            id="task-input"
                            label="Task"
                            type="text"
                            variant="outlined"
                            placeholder="make reservations, walk the dog, jog at sunset"
                            value={todo.task}
                            onChange={(e) => setTodo({ ...todo, task: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            name="task-description"
                            id="task-description"
                            label="Task Description"
                            placeholder="describe the task"
                            multiline
                            variant="outlined"
                            value={todo.description}
                            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            name="due-date"
                            id="due-date"
                            label="Due Date"
                            type="datetime-local"
                            value={todo.dueDate.slice(0, 19)}
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
                        />
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.buttonGridItem}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            type="submit"
                            fullWidth
                        >
                            Add Task
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            type="submit"
                            fullWidth
                        >
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default TodoForm;
