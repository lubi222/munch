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
export default function Andere() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <h4>Amalia</h4>
            <ul>
                <li>Hübsch</li>
                <li>Verlobte von Karl von Moor</li>
                <li>Gutherzig</li>
                <li>Lebt auf dem Schloss bei Karls „Familie“</li>
                <li>Ist Karl stets treu und steht zu ihm</li>
                <li>Glaubt an Karls Unschuld</li>
                <li>Liebevoll</li>
            </ul>
            <h4>Spiegelberg</h4>
            <ul>
                <li>Räuber</li>
                <li>Hatte die Idee eine Räuberbande zu gründen</li>
                <li>Einzelgänger</li>
                <li>Brutal und Gewissenlos</li>
                <li>Will Hauptmann der Räuberbande werden</li>
                <li>Intrigant</li>
                <li>Habgierig</li>
            </ul>
            <h4>Scweizer</h4>
            <ul>
                <li>Treuer Räuber in Karls Räuberbande</li>
                <li>Steht hinter Karl und seinen Vorhaben</li>
                <li>Steht zu seinem Wort</li>
                <li>
                    Beschützt Karl als Spiegelberg versucht zu die Räuber gegen
                    ihn aufzuhetzen, und ersticht ihn mit einem Dolch:
                </li>
                <li>
                    Erschießt sich, als er sein Versprechen Franz an Karl
                    auszuliefern nicht halten kann
                </li>
                <li>
                    “Hier hast du meine Hand drauf: Entweder du siehst zwei
                    zurückkommen oder gar keinen.“ (S.124, Z.34 ff.), „Er ist
                    maustot – mich sieht er nicht wieder (Schießt sich vor die
                    Stirn.)“ (S.136,Z.36 ff.)
                </li>
            </ul>
            <h4>Schwarz</h4>
            <ul>
                <li>Räuber</li>
                <li>Ist Karl stets treu</li>
            </ul>
            <h4>Kosinsky</h4>
            <ul>
                <li>Will in Karls Räuberbande</li>
                <li>Hat einen ähnliche familiäre Situation wie Karl</li>
                <li>Hat eine Frau namens Amalia</li>
            </ul>
            <h4>Razmann</h4>
            <ul>
                <li>Räuber</li>
                <li>
                    Hat Verständnis für Spiegelbergs Äußerungen, lässt sich
                    jedoch nicht darauf ein
                </li>
            </ul>
            <h4>Grimm</h4>
            <ul>
                <li>Räuber</li>
            </ul>
            <h4>Schufterle</h4>
            <ul>
                <li>Gewissenloser Räuber</li>
                <li>
                    Wirft bei Rollers Befreiung aus Spaß ein Kind ins Feuer:
                </li>
                <li>Wird deswegen von Karls Bande verbannt</li>
            </ul>
            <h4>Pastor Moser</h4>
            <ul>
                <li>Wortgewandt</li>
                <li>Frömmigkeit</li>
            </ul>
            <h4>Daniel</h4>
            <ul>
                <li>Diener im Schloss Moo</li>
                <li>Gewissenhafter Mensch</li>
                <li>Gutherzig</li>
            </ul>
            <h4>Hermann</h4>
            <ul>
                <li>Unehelicher Sohn eines Adelsmannes</li>
                <li>Leicht zu überzeugen</li>
                <li>Gewissenhaft</li>
            </ul>
            <h4>Roller</h4>
            <ul>
                <li>Ist Karl sehr wichtig</li>
                <li>Wird von Karl gerettet, als er gehängt werden soll</li>
                <li>Stirbt im Gefecht mit Soldaten</li>
            </ul>
        </div>
    );
}
