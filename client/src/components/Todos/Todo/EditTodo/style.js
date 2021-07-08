import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
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
