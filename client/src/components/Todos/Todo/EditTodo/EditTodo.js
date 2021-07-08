import React, { useState } from "react";
import useStyles from "./style";

import { CardContent, Typography, CardActions, Button, IconButton } from "@material-ui/core";

import { Edit as EditIcon } from "@material-ui/icons";
import moment from "moment";

const EditTodo = ({ task, description, dueDate, _id }) => {
    const classes = useStyles();
    const [todo, setTodo] = useState({
        task,
        description,
        dueDate,
    });
    return (
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
                style={{ paddingLeft: 8, lineHeight: 1 }}
            >
                due {moment(dueDate).fromNow()}
            </Typography>
            <CardActions className={classes.cardActions} style={{ paddingTop: 1 }}>
                <Button className={classes.completeBtn} variant="contained" color="primary">
                    Save Edit
                </Button>
                <IconButton size="medium">
                    <EditIcon />
                </IconButton>
            </CardActions>
        </>
    );
};

export default EditTodo;
