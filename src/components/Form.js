import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    root: { paddingBottom: "3rem" },
    Title: {
        fontWeight: "normal",
        textDecoration: "underline",
        fontSize: "1.1rem",
        marginBottom: "0",
    },
    ul: {
        margin: 0,
    },
    "@global": {
        "* >h4, * > ul": {
            color: "#cccccc",
        },
        "* > li": {
            marginTop: "0.15rem",
        },
    },
}));
export default function Form() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1rem" }}>
                <h4 className={classes.Title}>Einleitung</h4>

                <h4 className={classes.Title}>Art des Gesprächs:</h4>
                <ul className={classes.ul}>
                    <li>
                        Es handelt sich bei diesem Gespräch um eine zwanglose
                        Unterhaltung/eine formliche Besprechung/ein refl
                        ektierendes/argumentatives Gespräch.
                    </li>
                </ul>
                <h4 className={classes.Title}>Gesprächsumstände:</h4>
                <ul className={classes.ul}>
                    <li>Konkreter Anlass für den Dialog ist</li>
                    <li>
                        Die Gesprächssituation ist durch folgende Umstände
                        gekennzeichnet
                    </li>
                    <li>
                        Folgende Themen der vorherigen Szene werden wieder
                        aufgegriffen
                    </li>
                    <li>Dem Dialog vorausgegangen ist</li>
                </ul>
                <h4 className={classes.Title}>Gesprächspartner:</h4>
                <ul className={classes.ul}>
                    <li>Am Gespräch sind maßgeblich beteiligt</li>
                    <li>Den Dialog führen</li>
                    <li>
                        Es handelt sich um ein symmetrisches/komplementdres
                        Beziehungsverhältnis zwischen den Dialogpartnern.
                    </li>
                </ul>
                <h4 className={classes.Title}>Gesprächsziele und Motive:</h4>
                <ul className={classes.ul}>
                    <li>
                        Mit dem Gespräch will er
                        informierer/überzeugen/überredenlntmAusdruck
                        bringen/erreichen, dass
                    </li>
                    <li>
                        Sein Gesprächsverhalten ist durch seine Absicht ...
                        bestimmt
                    </li>
                    <li>Mit dem Gespräch beabsichtigt er</li>
                </ul>
                <h4 className={classes.Title}>Gesprächsziele und Motive:</h4>
                <ul className={classes.ul}>
                    <li>
                        Mit dem Gespräch will er
                        informierer/überzeugen/überreden/zum Ausdruck
                        bringen/erreichen, dass
                    </li>
                    <li>
                        Sein Gesprächsverhalten ist durch seine Absicht ...
                        bestimmt
                    </li>
                    <li>Mit dem Gespräch beabsichtigt er</li>
                </ul>
                <h4 className={classes.Title}>Beziehung der Gesprächsparner</h4>
                <ul className={classes.ul}>
                    <li>Dominiert/Geleitet wird das Gespräch von</li>
                    <li>
                        Die Redeanteile sind gleich/ungleich zugunsten von ...
                        verteilt
                    </li>
                    <li>
                        Das Verhältnis der Gesprächspartner zueinander ist ...,
                        denn
                    </li>
                    <li>
                        Die Beziehung zeichnet sich durch gegenseitige
                        Offenheit/strategisches Taktieren aus
                    </li>
                    <li>
                        Aus dieser Außerung/Antwort lässt sich auf seine
                        Einstellung zu ... schließen
                    </li>
                    <li>
                        Die Beziehung der Gesprächspartner bleibt
                        konstant/ändert sich
                    </li>
                </ul>
                <h4 className={classes.Title}>
                    Gesprächsinhalt/Gesprächsverlauf
                </h4>
                <ul className={classes.ul}>
                    <li>In dem Dialog geht es um die Frage</li>
                    <li>Er vertritt die Meinung, dass</li>
                    <li>Er belegt seine These durch folgendes Argument</li>
                    <li>
                        Der Gesprächsverlauf lässt sich folgendermaßen gliedern
                    </li>
                    <li>Der Dialog lässt eine Entwicklung erkennen, da</li>
                    <li>
                        Das Resultat des Dialogs ist der Entschluss/die
                        Erkenntnis
                    </li>
                    <li>Der Wendepunkt des Gesprächs ist</li>
                </ul>
                <h4 className={classes.Title}>Sprachlich-rhetorische Mittel</h4>
                <ul className={classes.ul}>
                    <li>
                        Der Satzbau ist vorwiegend hypotaktisch/parataktisch
                    </li>
                    <li>
                        In diesem/r Bild/Szene veranschaulicht die (häufige)
                        Verwendung von ..., dass
                    </li>
                    <li>
                        Zur Betonung und Verdeutlichung seiner Aussageabsicht
                        benutzt er folgende Stilmittel:
                    </li>
                    <li>
                        Auffzillig ist die Verwendung von ..., durch die bewirkt
                        wird, dass
                    </li>
                </ul>
                <h4 className={classes.Title}>
                    Funktion des Dialogs innerhalb des Dramas
                </h4>
                <ul className={classes.ul}>
                    <li>
                        Für das weitere Geschehen ist der Dialog insofern
                        wichtig, als
                    </li>
                    <li>
                        Im Zusammenhang des Dramas hat dieser Dialog die
                        Funktion
                    </li>
                </ul>
                <h4 className={classes.Title}>Schluss </h4>
            </div>
        </div>
    );
}
