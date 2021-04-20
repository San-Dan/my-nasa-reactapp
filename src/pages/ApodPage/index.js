import React from "react";
import ApodPhoto from "../../components/ApodPhoto";
import View from "../../components/View";
import Menu from "../../components/Menu";
import Button from "../../components/Button"; //to images.nasa.gov
import "./single.css";

const ApodPage = () => {
    return (
        <View className="apod-view">
            <Menu />
            <div className="img-links">
                <ApodPhoto />
            </div>
            <Button />
            
        </View>
    );
};

export default ApodPage;
