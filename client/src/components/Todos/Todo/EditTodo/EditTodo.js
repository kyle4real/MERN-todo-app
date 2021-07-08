import React, { useState } from "react";
import useStyles from "./style";

import {
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
    TextField,
} from "@material-ui/core";

import { Edit as EditIcon } from "@material-ui/icons";
import moment from "moment";

const EditTodo = ({ task, description, dueDate, _id }) => {
    const classes = useStyles();
    const initialTodo = {
        task,
        description,
        dueDate: moment(new Date(dueDate)).format(`YYYY-MM-DDTHH:mm:ss`),
    };
    const [todo, setTodo] = useState(initialTodo);
    return (
        <>
            <CardContent className={classes.cardContent}>
                <form autoComplete="off" className={`${classes.root}`}>
                    <TextField
                        name="edit-task"
                        id="edit-task"
                        label="Edit Task"
                        type="text"
                        size="small"
                        variant="outlined"
                        value={todo.task}
                        color="secondary"
                        onChange={(e) => setTodo({ ...todo, task: e.target.value })}
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
                </form>
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
                <Button className={classes.completeBtn} variant="contained" color="secondary">
                    Save Edit
                </Button>
                <Button variant="outlined" color="secondary" type="submit">
                    Reset
                </Button>
            </CardActions>
        </>
    );
};

export default EditTodo;
