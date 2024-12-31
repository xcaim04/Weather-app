import axios from "axios";
import { weatherData } from "../types/weatherData";

const API_KEY_REACT = "6c2528335daa281b94b4061450773f26";

const getWeatherData = async (
    location: string
): Promise<weatherData | null> => {
    try {
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY_REACT}&units=metric`
        );

        const { name, main, wind, weather } = response.data;
        const description = weather[0].description;
        const status = weather[0].main;

        return {
            location: name,
            temperature: main.temp,
            windSpeed: wind.speed,
            humedity: main.humidity,
            description: description,
            status: status,
        };
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return null;
        } else {
            throw error;
        }
    }
};

export default getWeatherData;
