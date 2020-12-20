import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import img_1 from "../images/Erste_Eindruck_Franz_1_1.png";
import img_2 from "../images/Erste_Eindruck_Karl_1_2.png";
import img_3 from "../images/Überischt_Räuber_Sturm_und_Drang.png";
import img_4 from "../images/Übersicht_Dramentheoretische_Aspekte.png";
import img_5 from "../images/Räuberhandlung.png";
import img_6 from "../images/Schlosshandlung.png";
import img_7 from "../images/Aufklärung.png";
import img_8 from "../images/Sturm_und_Drang.png";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
    root: {},
    Images: {
        display: "flex",
        alignItems: "center",
        justifyItems: "center",
        flexFlow: "column",
    },
    img: { margin: "3rem", height: "66%", width: "66%" },
}));
export default function Photos() {
    const classes = useStyles();
    var images = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8];
    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div className={classes.Images}>
                {images.map((i) => (
                    <img className={classes.img} src={i} alt="" />
                ))}
            </div>
        </div>
    );
}
