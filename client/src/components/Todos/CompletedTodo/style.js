import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    todoCard: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(1),
        overflow: "visible",
    },
    cardContent: {
        flexGrow: 1,
        paddingBottom: "2rem",
    },
    completeBtn: {
        whiteSpace: "nowrap",
    },
    cardActions: {
        justifyContent: "space-between",
    },
    timeRemaining: {
        fontStyle: "italic",
    },
}));
