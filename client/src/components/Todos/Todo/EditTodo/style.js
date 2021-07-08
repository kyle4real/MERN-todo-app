import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            marginBottom: theme.spacing(2),
            width: "100%",
        },
    },
    cardContent: {
        flexGrow: 1,
        paddingBottom: "2rem",
    },
    completeBtn: {
        whiteSpace: "nowrap",
    },
    timeRemaining: {
        fontStyle: "italic",
        marginBottom: 4,
    },
}));
