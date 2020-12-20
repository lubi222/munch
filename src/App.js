import React from "react";
import { Switch, Route } from "react-router-dom";
import Plan from "./components/Plan";
import Formulierungen from "./components/Form";
import Franz from "./components/Franz";
import Karl from "./components/Karl";
import AlterMoor from "./components/AlterMoor";
import Photos from "./components/Photos";
import Andere from "./components/Andere";
function App() {
    return (
        <div
            style={{
                padding: 0,
                margin: 0,
                height: "100%",
                backgroundColor: "#333333",
            }}
            className="App"
        >
            <Switch>
                <Route exact path="/plan" component={Plan}></Route>
                <Route exact path="/moor" component={AlterMoor}></Route>
                <Route exact path="/form" component={Formulierungen}></Route>
                <Route exact path="/karl" component={Karl}></Route>
                <Route exact path="/franz" component={Franz}></Route>
                <Route exact path="/photos" component={Photos}></Route>
                <Route exact path="/andere" component={Andere}></Route>
                <Route exact path="/" component={Plan}></Route>
            </Switch>
        </div>
    );
}

export default App;
