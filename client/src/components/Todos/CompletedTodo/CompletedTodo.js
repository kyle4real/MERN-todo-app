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
    Badge,
} from "@material-ui/core";

import {
    Delete as DeleteIcon,
    CheckCircleOutline as CheckCircleOutlineIcon,
} from "@material-ui/icons";
import moment from "moment";

const CompletedTodo = ({
    task,
    description,
    handleDelete,
    handleCompletedUpdate,
    _id,
    createdAt,
    dueDate,
    completedAt,
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Badge
                style={{ width: "100%", height: "100%" }}
                badgeContent={<CheckCircleOutlineIcon style={{ color: "green" }} />}
            >
                <Card className={classes.todoCard}>
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
                        color="textPrimary"
                        className={classes.timeRemaining}
                        style={{ paddingLeft: 8, marginBottom: 2, lineHeight: 1 }}
                    >
                        completed {moment(completedAt).toNow(true)} ago
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textPrimary"
                        className={classes.timeRemaining}
                        style={{ paddingLeft: 8, marginBottom: 2, lineHeight: 1 }}
                    >
                        completed in just {moment(createdAt).to(completedAt, true)}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textPrimary"
                        className={classes.timeRemaining}
                        style={{ paddingLeft: 8, lineHeight: 1 }}
                    >
                        completed {moment(completedAt).to(dueDate, true)}{" "}
                        {completedAt < dueDate ? (
                            <span style={{ color: "green" }}>before</span>
                        ) : (
                            <span style={{ color: "red" }}>after</span>
                        )}{" "}
                        due
                    </Typography>
                    <CardActions className={classes.cardActions} style={{ paddingTop: 1 }}>
                        <div>
                            <Button className={classes.completeBtn} variant="contained" disabled>
                                Completed
                            </Button>
                            <Button onClick={() => handleCompletedUpdate(_id, false)}>undo</Button>
                        </div>
                        <IconButton onClick={() => handleDelete(_id)} size="medium">
                            <DeleteIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Badge>
        </Grid>
    );
};

export default CompletedTodo;
