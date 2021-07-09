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
import moment from "moment";

const CompletedTodo = () => {
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
                        color="primary"
                        className={classes.timeRemaining}
                        style={{ paddingLeft: 8, lineHeight: 1 }}
                    >
                        due {moment(dueDate).fromNow()}
                    </Typography>
                    <CardActions className={classes.cardActions} style={{ paddingTop: 1 }}>
                        <Button className={classes.completeBtn} variant="contained" color="primary">
                            Complete
                        </Button>
                        <div>
                            <IconButton onClick={() => handleDelete(_id)} size="medium">
                                <DeleteIcon />
                            </IconButton>
                        </div>
                    </CardActions>
                </Card>
            </Badge>
        </Grid>
    );
};

export default CompletedTodo;
