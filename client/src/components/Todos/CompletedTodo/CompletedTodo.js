import React from "react";

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

const CompletedTodo = () => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Badge
                style={{ width: "100%", height: "100%" }}
                badgeContent={<CheckCircleOutlineIcon style={{ color: "green" }} />}
            >
                <Card className={classes.todoCard}></Card>
            </Badge>
        </Grid>
    );
};

export default CompletedTodo;
