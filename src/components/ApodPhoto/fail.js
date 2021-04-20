return (
    <View className="apod-container">
        if ({apodData.media_type === "image"})
        {
            <img
                src={apodData.url}
                alt={apodData.title}
                className="apod-img"
            />
        }
        else if ({apodData.media_type === "video"}){" "}
        {
            <iframe
                src={apodData.url}
                title={apodData.title}
                className="apod-img"
            />
        }
        <div>
            <h1>{apodData.title}</h1>
            <p>{apodData.explanation}</p>
        </div>
    </View>
);

<View className="apod-container">
                <img
                    src={apodData.url}
                    alt={apodData.title}
                    className="apod-img"
                />
            do {
                <iframe
                src={apodData.url}
                title={apodData.title}
                className="apod-img"
            />
            } while ({apodData.media_type === "video"});
            <div>
                <h1>{apodData.title}</h1>
                <p>{apodData.explanation}</p>
            </div>
        </View>