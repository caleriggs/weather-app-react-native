import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import env from '../env';

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    const fetchWeatherData = () => {
      fetch(env.currentWeatherUrl)
        .then(response => {
          if (!response.ok) {
            console.log('response', response);
            throw new Error('Weather API call failure');
          }
          return response.json();
        })
        .then(data => {
          console.log('data', data);
          setWeatherData(data);
          console.log('data keys: ', Object.keys(data));
          console.log('weather data: ', weatherData);
          return;
        })
        .catch(error => console.error('error: ', error));
    };
    fetchWeatherData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SafeAreaView>
      <Text>Current Weather: Summertime!!!</Text>
      {console.log('weather data: ', weatherData)}
    </SafeAreaView>
  );
};

export default CurrentWeather;
