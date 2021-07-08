import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import env from '../../env';

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchWeatherData = () => {
      setIsLoading(true);
      fetch(env.currentWeatherUrl)
        .then(response => {
          if (!response.ok) {
            console.log('response', response);
            throw new Error('Weather API call failure');
          }
          return response.json();
        })
        .then(data => {
          console.log('SUCCESS: ', data);
          setWeatherData(data);
          setIsLoading(false);
        })
        .catch(error => {
          setIsLoading(false);
          console.error('Error fetching weather data: ', error);
        });
    };
    fetchWeatherData();
  }, []);
  if (isLoading || !weatherData) {
    return <Text>Getting Weather Data</Text>;
  }
  return (
    <SafeAreaView>
      <Text>Current Weather: Summertime!!!</Text>
      <Text>Add the weather below</Text>
    </SafeAreaView>
  );
};

export default CurrentWeather;
