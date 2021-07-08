import React, {useState, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {currentWeatherStyles} from '../styles/styles';
import env from '../../env';

const getIcon = icon => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const CurrentWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWeatherData = () => {
      fetch(env.currentWeatherUrl)
        .then(response => {
          if (!response.ok) {
            console.error('error response: ', response);
            throw new Error('Weather API call failure');
          }
          return response.json();
        })
        .then(data => {
          console.info('SUCCESS: ', data);
          setIsLoading(false);
          return setWeatherData(data);
        })
        .catch(error => console.error('error: ', error));
    };
    fetchWeatherData();
  }, []);

  if (isLoading || !weatherData) {
    return (
      <View>
        <Text>Getting Weather Data</Text>
      </View>
    );
  }

  return (
    <View style={currentWeatherStyles.container}>
      <View style={currentWeatherStyles.titleContainer}>
        <Text
          style={currentWeatherStyles.titleText}>{`${weatherData.name.replace(
          '-',
          ' ',
        )}`}</Text>
        <Image
          source={{uri: getIcon(weatherData.weather[0].icon)}}
          style={currentWeatherStyles.image}
        />
        <Text
          style={
            currentWeatherStyles.currentTemp
          }>{`${weatherData.main.temp}`}</Text>
      </View>
      <View style={currentWeatherStyles.tempContainer}>
        <Text
          style={
            currentWeatherStyles.tempItem
          }>{`Low: ${weatherData.main.temp_min}`}</Text>
        <Text
          style={
            currentWeatherStyles.tempItem
          }>{`High: ${weatherData.main.temp_max}`}</Text>
      </View>
    </View>
  );
};

export default CurrentWeather;
