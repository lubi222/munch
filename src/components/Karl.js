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
export default function Karl() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1rem" }}>
                <h4>Karl(Protagonist)</h4>

                <ul>
                    <li>Führte ein aufregendes Studentenleben</li>
                    <li>
                        Hat ein gutes Verhältnis zu seinem Vater (Lieblingssohn)
                    </li>
                    <li>
                        Karl sieht Probleme mit der Humanität der Aufklärung;
                        ergreift Partei für die Sache der Freiheit; ebenfalls
                        wie Franz begnadeter Rhetoriker
                    </li>
                    <li>
                        bei beiden wird Gesetz oft erwähnt, das in Opposition zu
                        Freiheit steht → Vorwegnahme der Revolution
                    </li>
                    <li>
                        in Karl offenbaren sich sodann zwei Strömungen der Zeit:
                        Sturm und Drang auf der einen und die Empfindsamkeit auf
                        der anderen → jugendliche heroische Tatkraft vs. Heimweh
                        des verlorenen Sohnes
                    </li>
                </ul>
                <h4>Karl als Räuberhauptmann</h4>
                <ul>
                    <li>immer wieder von seinem Gewissen heimgesucht</li>
                    <li>
                        versucht durch Robin-Hood-Nachahmung sein Gewissen zu
                        beruhigen
                    </li>
                    <li>
                        [V,2]Die Hatz nach Franz enthält tief religiöse
                        Komponente → Gottesdienst mit Karl als Hohepriester in
                        vollkommener Selbstverblendung
                    </li>
                </ul>
            </div>
        </div>
    );
}
