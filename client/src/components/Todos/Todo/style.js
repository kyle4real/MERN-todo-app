import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    todoCard: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(1),
    },
    cardContent: {
        flexGrow: 1,
        paddingBottom: "1rem",
    },
    completeBtn: {
        whiteSpace: "nowrap",
    },
}));
