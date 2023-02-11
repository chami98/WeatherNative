import axios from 'axios';

const API_KEY = 'b0c18407afee64713ddb9a3a406d06bd';


export const fetchLocationWeather = async (lat, lon) => {
    const API_ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    console.log(lat, lon);

    try {
        const response = await axios.get(API_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
