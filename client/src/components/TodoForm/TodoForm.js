import React from "react";

import { Container, TextField, Grid } from "@material-ui/core";
import useStyle from "./style";

const TodoForm = () => {
    const classes = useStyle();
    return (
        <Container maxWidth="md">
            <form className={`${classes.form} ${classes.root}`} autoComplete="off">
                <Grid container alignItems="stretch" spacing={3} className={classes.formRow}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            name="task-input"
                            id="task-input"
                            label="Task"
                            type="text"
                            variant="outlined"
                            placeholder="make reservations, walk the dog, jog at sunset"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            id="outlined-textarea"
                            label="Task Description"
                            placeholder="describe the task"
                            multiline
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default TodoForm;
