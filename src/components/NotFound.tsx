import React from "react";

interface WeatherCardProps {
    location: string;
}

export const NotFound: React.FC<WeatherCardProps> = ({ location }) => {
    return (
        <div className="weather-card not-found">
            <div className="not-found-text">
                <h1 className="location">{location}</h1>
                <h4>404 Not Found</h4>
            </div>

            <div>
                <img src="../public/rain.svg" alt="rain.svg" />
            </div>
        </div>
    );
};
