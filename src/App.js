import React from "react";
import { Router } from "@reach/router";

import HomePage from "./pages/Home";
import ApodPage from "./pages/ApodPage";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <HomePage path="/" />
                <ApodPage path="/apod-page" />
                <NotFound default />
            </Router>
        </div>
    );
}

export default App;
