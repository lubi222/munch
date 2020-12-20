import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    root: { minHeight: "100vh" },
    "@global": {
        "* >h4, * > ul": {
            color: "#cccccc",
        },
        "* > li": {
            marginTop: "0.15rem",
        },
    },
}));
export default function AlterMoor() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1rem" }}>
                <h4>Der alte Moor</h4>
                <ul>
                    <li>Alter gebrechlicher Mann</li>
                    <li>
                        Gutmütiger Mann, der viel Kummer aufgrund seines Sohnes
                        Karl hat
                    </li>
                    <li>Sehr betroffen, wenn es um seine Söhne geht</li>
                    <li>Schwach</li>
                </ul>
            </div>
        </div>
    );
}
