import React from "react";

import { Container, TextField, Grid, Button } from "@material-ui/core";
import useStyle from "./style";

const TodoForm = () => {
    const classes = useStyle();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
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
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            id="outlined-textarea"
                            label="Task Description"
                            placeholder="describe the task"
                            multiline
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <TextField
                            id="datetime-local"
                            label="Due Date"
                            type="datetime-local"
                            defaultValue="2017-05-24T10:30"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
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
