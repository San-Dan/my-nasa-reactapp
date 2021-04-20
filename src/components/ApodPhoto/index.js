import React, { useState, useEffect } from "react";
//import View from "../../components/View";
import "./apod.css";
//const apiKey = process.env.REACT_APP_NASA_KEY; https://api.nasa.gov/planetary/apod?api_key=${apiKey}
const api = `https://api.nasa.gov/planetary/apod?api_key=NzLxf63fgdGbeciQyccP4j6Y8cqAM0LlyYUKB9zV`;

const ApodPhoto = () => {
    const [apodData, setApodData] = useState(null);

    useEffect(() => {
        fetchApod();

        async function fetchApod() {
            const res = await fetch(`${api}`);
            const data = await res.json();
            setApodData(data);
        }
    }, []);

    if (!apodData) {
        return <div/>;
    }

    return (
        <div className="apod-container">
                <img
                    src={apodData.url}
                    alt=" "
                    className="apod-img"
                />
            
                <iframe
                src={apodData.url}
                title={apodData.title}
                className="apod-img"
            />
            <div>
                <h1>{apodData.title}</h1>
                <p>{apodData.explanation}</p>
            </div>
        </div>
    );
};

export default ApodPhoto;
