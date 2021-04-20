import React from "react";
import { Link } from "@reach/router";

import View from "../../components/View";
import logo from "../../nasa-logo.png";
import "./home.css";

const HomePage = () => {
    return (
        <View className="home-view">
            <Link to="/apod-page">
                <img src={logo} alt="Nasa logo" />
            </Link>
            <h2>Click the NASA logo to see the</h2>
            <h2>Astronomy Picture of the Day</h2>
        </View>
    );
};

export default HomePage;
