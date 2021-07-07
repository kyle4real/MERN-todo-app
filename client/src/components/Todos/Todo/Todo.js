import React from "react";

import { Grid } from "@material-ui/core";

const Todo = ({ id, title, description }) => {
    return (
        <Grid item xs={12} sm={6} md={4}>
            {title}
        </Grid>
    );
};

export default Todo;
