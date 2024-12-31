export const getWeatherImage = (description: string): string => {
    return weatherImageMap[description.toLowerCase()] || "../public/icon.svg";
};

const weatherImageMap: { [key: string]: string } = {
    "clear sky": "../public/soleado.svg",
    "few clouds": "../public/cloud.svg",
    "scattered clouds": "../public/cloud.svg",
    "broken clouds": "../public/cloud.svg",
    "overcast clouds": "./public/cloud.svg",
    "light rain": "../public/ligth-rain.svg",
    "moderate rain": "../public/ligth-rain.svg",
    "heavy intensity rain": "../public/rain.svg",
    "light snow": "../public/snow.svg",

    snow: "../public/snow.svg",
    "heavy snow": "../public/snow.svg",
    mist: "../public/cloud.svg",
    fog: "../public/cloud.svg",
    thunderstorm: "../public/ligth-rain.svg",
    "light shower rain": "../public/ligth-rain.svg",
    "shower rain": "../public/ligth-rain.svg",
};
