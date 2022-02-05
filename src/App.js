import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";


function App() {
return (
    <Router>
            <Switch>
                <Route path="/test">
                    <Test />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
    </Router>
)
}

export default App;
