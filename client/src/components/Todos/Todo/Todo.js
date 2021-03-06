import React, { useState } from "react";
import useStyles from "./style";
import EditTodo from "./EditTodo/EditTodo";

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
    Badge,
} from "@material-ui/core";

import {
    Delete as DeleteIcon,
    Edit as EditIcon,
    AccessTime as AccessTimeIcon,
} from "@material-ui/icons";
import moment from "moment";

const Todo = ({
    _id,
    task,
    description,
    dueDate,
    handleDelete,
    handleCompletedUpdate,
    todoObj,
    setTodos,
    todos,
    createdAt,
}) => {
    const classes = useStyles();
    const [editActive, setEditActive] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Badge
                style={{ width: "100%", height: "100%" }}
                badgeContent={
                    editActive ? (
                        <EditIcon color="secondary" onClick={() => setEditActive(false)} />
                    ) : (
                        <AccessTimeIcon color="primary" />
                    )
                }
            >
                <Card className={classes.todoCard}>
                    {editActive ? (
                        <EditTodo
                            {...todoObj}
                            setEditActive={setEditActive}
                            setTodos={setTodos}
                            todos={todos}
                        />
                    ) : (
                        <>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {task}
                                </Typography>
                                <Typography variant="body2" component="p" color="textSecondary">
                                    {description}
                                </Typography>
                            </CardContent>
                            <Typography
                                variant="body2"
                                color="primary"
                                className={classes.timeRemaining}
                                style={{ paddingLeft: 8, marginBottom: 2, lineHeight: 1 }}
                            >
                                created {moment(createdAt).toNow(true)} ago
                            </Typography>
                            <Typography
                                variant="body2"
                                color="primary"
                                className={classes.timeRemaining}
                                style={{ paddingLeft: 8, lineHeight: 1 }}
                            >
                                due {moment(dueDate).fromNow()}
                            </Typography>
                            <CardActions className={classes.cardActions} style={{ paddingTop: 1 }}>
                                <Button
                                    className={classes.completeBtn}
                                    variant="contained"
                                    color="primary"
                                    onClick={() => handleCompletedUpdate(_id, true)}
                                >
                                    Complete
                                </Button>
                                <div>
                                    <IconButton onClick={() => handleDelete(_id)} size="medium">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton size="medium" onClick={() => setEditActive(true)}>
                                        <EditIcon />
                                    </IconButton>
                                </div>
                            </CardActions>
                        </>
                    )}
                </Card>
            </Badge>
        </Grid>
    );
};

export default Todo;
