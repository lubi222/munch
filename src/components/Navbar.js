import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
// import { Button } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    Button: {
        textDecoration: "none",
        color: "white",
        fontSize: "1.25rem",
        // border: "2px solid red",
        backgroundColor: "#444444",
        flexGrow: 1,
        height: "100%",
        borderRadius: 0,
        textTransform: "capitalize",
        fontWeight: "normal",
        height: "64px",
    },
    Toolbar: {
        margin: "0 3rem",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "stretch",
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    const History = useHistory();

    return (
        <div className={classes.root}>
            <AppBar
                style={{ margin: 0, padding: 0 }}
                position="static"
                color="transparent"
                elevation={0}
                style={{
                    // border: "2px solid yellow",
                    display: "flex",
                    margin: 0,
                    padding: 0,
                    alignItems: "stretch",
                    justifyItems: "stretch",
                    height: "auto",
                }}
            >
                <Toolbar
                    className={classes.Toolbar}
                    style={{
                        // border: "2px solid green",
                        width: "100%",
                        margin: "0",
                        padding: 0,
                        height: "100%",
                    }}
                >
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/plan");
                        }}
                    >
                        Plan
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/karl");
                        }}
                    >
                        Karl
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/franz");
                        }}
                    >
                        Franz
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/moor");
                        }}
                    >
                        Alter Moor
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/andere");
                        }}
                    >
                        Andere
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/form");
                        }}
                    >
                        Formulierungen
                    </Button>
                    <Button
                        className={classes.Button}
                        onClick={() => {
                            History.push("/photos");
                        }}
                    >
                        Photos
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
