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
    ul: {
        maxWidth: "66.7%",
    },
}));
export default function Franz() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1rem" }}>
                <h4>Franz(Antagonist)</h4>
                <ul className={classes.ul}>
                    <li>
                        hinterhältig/hinterlistig, skrupellos, kaltherzig,
                        machtgierig, sadistisch, opportunistisch, egoistisch,
                        bösartig, intrigant, nicht gläubig und hat ein streng
                        rationales Denken
                    </li>
                    <li>
                        Charakter, der anhand von streng logischen/ rationalen,
                        aber auch skrupellosen Strategien versucht, sein Ziel zu
                        erreichen: Mehr Macht, mehr Wohlstand, mehr als Karl.
                    </li>
                    <li>
                        Franz hat ein rationales Denken und lehnt Religion und
                        Aberglaube ab. Durch diese Ablehnung hat sich ein Fehlen
                        jedweder moralischer Werte entwickelt.
                    </li>
                    <li>
                        negatives Beispiel der Werte der Aufklärung. Franz
                        zeigt, wohin ein rein rationales Denken und ein fehlen
                        von religiösen Vorstellungen nach Schillers Ansicht
                        führen kann
                    </li>
                    <li>
                        Er ist hässlich und beneidet seinen Bruder daher sehr um
                        sein Äußeres, seine Verlobte Amalia und die Liebe seines
                        Vaters, die er nie bekommen hat.
                    </li>
                    <li>
                        Diese Faktoren rufen in Franz einen immer größer
                        werdenden Hass hervor, welcher ihn zu einem
                        hinterlistigen Plan motiviert.
                    </li>
                    <li>
                        Er ist durch seinen Selbsthass völlig gefühllos geworden
                        und scheint keinerlei Zuneigung zu seiner Familie zu
                        empfinden.
                    </li>
                    <li>
                        Verhaltet sich äußerst hinterlistig, egoistisch und
                        brutal.
                    </li>
                    <li>[I,1]Darwinische Lehre - wird offenbar im Monolog</li>
                    <li>
                        [V,1]In Traumszene in Akt 5 nimmt Schiller die Analyse
                        eines im Unbewussten lagernden Kindheitstraumas ganz im
                        Stile der Psychoanalyse vor (Anlehnung auch an
                        Shakespeares Macbeth)
                    </li>
                </ul>
            </div>
        </div>
    );
}
