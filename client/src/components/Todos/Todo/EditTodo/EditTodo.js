import React, { useState } from "react";
import useStyles from "./style";
import { editTodo } from "../../../../api";

import { CardContent, Typography, CardActions, Button, TextField } from "@material-ui/core";

import moment from "moment";

const EditTodo = ({ task, description, _id, dueDate, setEditActive, setTodos, todos }) => {
    const classes = useStyles();
    const initialTodo = {
        task,
        description,
        dueDate: moment(new Date(dueDate)).format(`YYYY-MM-DDTHH:mm:ss`),
    };
    const [todo, setTodo] = useState(initialTodo);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!todo.task || !todo.description) {
            return;
        }

        const newTodo = await editTodo(_id, todo);
        console.log(newTodo);
        setTodos(todos.map((current) => (current._id !== _id ? current : newTodo)));
        setEditActive(false);
    };

    console.log(JSON.stringify(initialTodo) !== JSON.stringify(todo));

    return (
        <>
            <form
                autoComplete="off"
                className={`${classes.root}`}
                onSubmit={(e) => handleSubmit(e)}
            >
                <CardContent className={classes.cardContent}>
                    <TextField
                        name="edit-task"
                        id="edit-task"
                        label="Edit Task"
                        type="text"
                        size="small"
                        variant="outlined"
                        value={todo.task}
                        color="secondary"
                        onChange={(e) => {
                            setTodo({ ...todo, task: e.target.value });
                        }}
                    />
                    <TextField
                        name="edit-description"
                        id="edit-description"
                        label="Edit Description"
                        multiline
                        size="small"
                        variant="outlined"
                        value={todo.description}
                        color="secondary"
                        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
                    />
                    <TextField
                        name="due-date"
                        id="due-date"
                        label="Due Date"
                        type="datetime-local"
                        value={todo.dueDate}
                        className={classes.textField}
                        color="secondary"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
                    />
                </CardContent>
                <Typography
                    variant="body2"
                    color="secondary"
                    className={classes.timeRemaining}
                    style={{ paddingLeft: 8, lineHeight: 1 }}
                >
                    due {moment(todo.dueDate).fromNow()}
                </Typography>
                <CardActions className={classes.cardActions} style={{ paddingTop: 1 }}>
                    <div>
                        <Button
                            className={classes.completeBtn}
                            variant="contained"
                            color="secondary"
                            type="submit"
                        >
                            Save Edit
                        </Button>
                        <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => setTodo(initialTodo)}
                            size="small"
                        >
                            Reset
                        </Button>
                    </div>
                    <Button size="small" color="textPrimary" onClick={() => setEditActive(false)}>
                        Cancel
                    </Button>
                </CardActions>
            </form>
        </>
    );
};

export default EditTodo;
