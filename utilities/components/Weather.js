import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { fetchWeather } from '../fetchWeather';

const Weather = () => {
    const [weather, setWeather] = useState({});

    useEffect(() => {
        fetchWeather('London').then((data) => setWeather(data));
    }, []);

    return (
        <View>
            <Text>{weather.main && weather.main.temp}</Text>
        </View>
    );
};

export default Weather;
