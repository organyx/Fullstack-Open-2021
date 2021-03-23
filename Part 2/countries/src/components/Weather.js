import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState({
        temperature: 0,
        windSpeed: 0,
        condition: '',
        windDirection: 'TBD'
    });

    useEffect(() => {
        const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${capital}`;
        axios
            .get(weatherUrl)
            .then(res => {
                console.log(res.data);
                const weatherObj = {
                    temperature: res.data.current.temperature,
                    condition: res.data.current.weather_icons[0],
                    windSpeed: res.data.current.wind_speed,
                    windDirection: res.data.current.wind_dir
                };
                setWeather(weatherObj);
            })
            .catch(error => console.log('Error', error));
    }, []);

    return (
        <div>
            <h3>Weather in {capital}</h3>
            <h4>Temperature: {weather.temperature} Celsius</h4>
            <img src={weather.condition} alt="condition" />
            <h4>
                Wind: {weather.windSpeed} Km/H, {weather.windDirection}
            </h4>
        </div>
    );
};

export default Weather;