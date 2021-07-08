import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            // margin: theme.spacing(1),
            width: "100%",
        },
    },
    form: {
        marginTop: "2rem",
        marginBottom: "2rem",
    },
}));
