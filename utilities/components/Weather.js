import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../fetchWeather';
import { fetchLocationWeather } from '../fetchLocationWeather';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Platform, Alert, Image } from 'react-native';
import * as Location from 'expo-location';

const Weather = ({ navigation }) => {
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('Galle');
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        fetchWeather(location).then((data) => setWeather(data));

    }, []);

    const fetchData = () => {
        setLoading(true);

        if (location != "") {
            fetchWeather(location).then((data) => {
                setWeather(data);
                setLoading(false);
            });
        }

    };

    const fetchLocationData = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Error', 'Permission to access location was denied');
            return;
        }

        setLoading(true);
        let location = await Location.getCurrentPositionAsync({});

        fetchLocationWeather(location.coords.latitude, location.coords.longitude).then((data) => {
            setWeather(data);
            setLoading(false);
        });
    };

    const celsius = weather.main ? weather.main.temp - 273.15 : 0;
    const humidity = weather.main ? weather.main.humidity : 0;
    const windSpeed = weather.wind ? weather.wind.speed : 0;
    const pressure = weather.main ? weather.main.pressure : 0;
    const sea_level = weather.main ? weather.main.sea_level : 0;
    const feels_like = weather.main ? weather.main.feels_like - 273.15 : 0;
    const sunrise = weather.main ? weather.sys.sunrise : 0;
    const name = weather.main ? weather.name : 0;

    const description = weather.weather ? weather.weather[0].description : '';

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/weatherx.png')}
                style={{ width: '100%', height: 100, marginBottom: 20 }} />
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(text) => setLocation(text)}
                    placeholder="Enter location"
                    style={styles.input}
                />
                <Button onPress={fetchData} title="Get Weather" color="#00b0ff"
                    style={styles.button} />
            </View>

            {loading ? <ActivityIndicator size="large" color="#fff" /> : (
                <View style={styles.weatherContainer}>
                    <Text style={styles.text}>Location: {name}</Text>
                    <Text style={styles.text}>Temperature: {celsius.toFixed(1)}°C</Text>
                    <Text style={styles.text}>Humidity: {humidity}%</Text>
                    <Text style={styles.text}>Wind Speed: {windSpeed}m/s</Text>
                    <Text style={styles.text}>Pressure: {pressure}hPa</Text>
                    <Text style={styles.text}>Weather: {description}</Text>
                    <Text style={styles.text}>Sea Level: {sea_level}m</Text>
                    <Text style={styles.text}>Feels Like: {feels_like.toFixed(1)}°C</Text>
                    <Text style={styles.text}>Wind Speed: {windSpeed}</Text>
                    <Text style={styles.text}>Location: {name}</Text>

                    <Button title='Use Device Location'
                        onPress={fetchLocationData}
                    />

                </View>
            )}

            <Button title='About Us'
                onPress={() => navigation.navigate("About", { screen: "About" })}
                style={styles.button}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
    },
    inputContainer: {
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    input: {
        width: '60%',
        height: 40,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    weatherContainer: {
        width: '80%',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff',
        marginVertical: 10,
    },
    logo: {
        width: '100%'
    },
    button: {
        marginTop: 200,
        backgroundColor: 'white',
        color: 'white',
    }
});

export default Weather;
