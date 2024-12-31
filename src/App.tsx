import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import getWeatherData from "./services/weatherServices";
import { weatherData } from "./types/weatherData";
import { NotFound } from "./components/NotFound";
import { getWeatherImage } from "./types/weatherImages";

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<weatherData | null>(null);
    const [dataFound, setDataFound] = useState(true);

    const handleSearch = async (location: string) => {
        const data = await getWeatherData(location);
        if (data) {
            setWeatherData(data);
            setDataFound(true);
        } else {
            setWeatherData(null);
            setDataFound(false);
        }
    };

    let path = "../publi/icon.svg";

    if (weatherData != null) {
        path = getWeatherImage(weatherData.description);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />

            <div className="card">
                <div className="container-styles">
                    {dataFound ? (
                        weatherData && <WeatherCard weatherData={weatherData} />
                    ) : (
                        <NotFound location={weatherData!.location} />
                    )}
                </div>
                <img src={path} alt="weather" />
            </div>
        </>
    );
};

export default App;
