import axios from 'axios';

const API_KEY = 'your_api_key';
const API_ENDPOINT = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`;

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(API_ENDPOINT.replace('London', city));
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
