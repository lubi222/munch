import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
const useStyles = makeStyles((theme) => ({
    root: { paddingBottom: "3rem" },
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
export default function Plan() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Navbar></Navbar>
            <div style={{ marginLeft: "1rem" }}>
                <h4>1. Einleitung</h4>
                <ul className={classes.ul}>
                    <li>Zitat, historischer Kontext etc.</li>
                    <li>
                        Textdaten: Autor, Titel, Textsorte, Entstehungszeit,
                        Benennen der Epoche
                    </li>
                    <li>Thema des Dramas und Thema der Szene</li>
                    <li>Kurze Wiedergabe der wichtigsten Momenten</li>
                </ul>
                <h4>2. Inhaltsangabe und Einordnung in den Kontext</h4>
                <ul className={classes.ul}>
                    <li>
                        Einordnung der Szene im Drama
                        <ul>
                            <li>
                                Die zweite Szene des ersten Aktes ist Teil der
                                Einführung im Drama und lässt sich damit der
                                Exposition zuordnen
                            </li>
                        </ul>
                    </li>
                    <li>
                        Kontextualisierung der Szene (z.B. Vorgeschichte und
                        nachfolgende Handlung, die für das Verständnis der Szene
                        wichtig sind)
                    </li>
                    <li>
                        kurze Inhaltsangabe der Szene im Präsens
                        <ul>
                            <li>TATTE-Satz</li>
                            <li>
                                Wichtigste Aspekte benennen, die später
                                analysiert werden
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4>3. Hauptteil</h4>
                <ul className={classes.ul}>
                    <li>
                        Formaler Aufbau der Dramenszene
                        <ul>
                            <li>
                                Gliederung, Verteilung von Dialog und Monolog,
                                Regieanweisungen
                            </li>
                        </ul>
                    </li>
                    <li>
                        Inhalt
                        <ul>
                            <li>
                                Gesprächsgegenstand/Inhalt der Szene (z.B.
                                Bühnenhandlung, Inhalt des Gesprächs,
                                Positionen, Argumente)
                            </li>
                            <li>
                                Gesprächssituation (z.B. Ort, Zeit, Atmosphäre)
                            </li>
                            <li>
                                Figuren (z.B. Motive, persönliche Situation,
                                Weltanschauung, Verhaltensweisen, Eigenschaften)
                            </li>
                            <li>
                                Figurenkonstellation (z.B. Beziehungen
                                zueinander, gesellschaftlicher Kontext)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Dramaturgische Aspekte
                        <ul>
                            <li>Regieanweisungen</li>
                            <li>Bühnenbild</li>
                            <li>Effekte</li>
                        </ul>
                    </li>
                    <li>
                        Kommunikation
                        <ul>
                            <li>
                                Gesprächsverlauf (z.B. Art des Beginns und des
                                Endes, Konfliktentwicklung, Wendepunkte)
                            </li>
                            <li>
                                Gesprächsart (z.B. Diskussion, Verhör, Streit,
                                Entscheidungssuche, Plauderei)
                            </li>
                            <li>
                                Kommunikationsverhalten (z.B. Redeanteil;
                                Sprecherwechsel; symmetrisch/komplementär;
                                Formen sprachlichen Handelns, z.B. fragen,
                                vorwerfen, bitten, informieren, argumentativ
                            </li>
                            <li>
                                nonverbales Verhalten (z.B. Bewegungen, Gestik,
                                Mimik, Körperhaltung)
                            </li>
                            <li>
                                Kommunikationsstörungen (z.B. Missverständnisse,
                                Widersprüche, Täuschungen)
                            </li>
                            <li>
                                Adressatenbezug (z.B. Adressaten in und
                                außerhalb der Szene, Art der Ansprache)
                            </li>
                        </ul>
                    </li>
                    <li>
                        Sprachliche Gestaltungsmittel
                        <ul>
                            <li>
                                Sprachschicht, Sprachstil (z.B. Hochsprache –
                                Alltagssprache – Jargon, geschlechtsspezifisch,
                                zeittypisch, sprachliche Brüche)
                            </li>
                            <li>
                                Sprachduktus (z.B. Pausen, Unterbrechungen,
                                Ausrufe, Wiederholungen)
                            </li>
                            <li>
                                rhetorische Figuren und ihre Funktion (z.B.
                                Antithesen, Ellipsen, Euphemismen, Hyperbeln,
                                Ironie, Metaphern)
                            </li>
                            <li>
                                syntaktische Struktur (z.B. Parataxe/Hypotaxe,
                                Satzlänge und Satzarten
                            </li>
                        </ul>
                    </li>
                </ul>
                <h4>Schlussteil</h4>
                <ul className={classes.ul}>
                    <li>Zusammenfassung der wichtigsten Ergebnisse; (Fazit)</li>
                    <li>
                        abschließende Gesamtdeutung der Intention Stellenwert/
                        Bedeutung der Szene für das Drama
                    </li>
                    <li>
                        Rückgriff auf die anfangs aufgestellte Deutungshypothese
                    </li>
                    <li>
                        Kontextuierung/ Einordnung in einen größeren
                        Zusammenhang (z.B. Epoche, Gattung, Motivgeschichte,
                        Dramentheorie, Biografie des Autors, historischer/
                        politisch-sozialer/ geistesgeschichtlicher Hintergrund)
                    </li>
                </ul>
            </div>
        </div>
    );
}
