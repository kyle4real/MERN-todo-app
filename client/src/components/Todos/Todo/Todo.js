import React from "react";
import useStyles from "./style";

import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    IconButton,
} from "@material-ui/core";

import { Delete as DeleteIcon } from "@material-ui/icons";

const Todo = ({ _id, task, description, handleDelete }) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.todoCard}>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {task}
                    </Typography>
                    <Typography variant="body2" component="p" color="textSecondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button className={classes.completeBtn} variant="contained" color="primary">
                        Complete
                    </Button>
                    <IconButton onClick={() => handleDelete(_id)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Todo;