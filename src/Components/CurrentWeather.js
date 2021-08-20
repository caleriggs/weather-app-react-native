import React, {useState, useEffect} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import styles, {currentWeatherStyles} from '../styles/styles';
import DailyWeatherItem from './DailyWeatherItem';
import HourlyWeatherItem from './HourlyWeatherItem';
import env from '../../env';

const getIcon = icon => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const CurrentWeather = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [hourlyWeatherData, setHourlyWeatherData] = useState(null);
  const [dailyWeatherData, setDailyWeatherData] = useState(null);
  const [timezoneOffset, setTimezoneOffset] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchWeatherData = () => {
      Promise.all([fetch(env.oneCallUrl), fetch(env.currentWeatherUrl)])
        .then(([res1, res2]) => {
          console.log(res1.ok, res2.ok);
          if (!res1.ok || !res2.ok) {
            console.error('error response: ', {res1, res2});
            throw new Error('Weather API call failure');
          }
          Promise.all([res1.json(), res2.json()]).then(([oneData, current]) => {
            console.info('SUCCESS: ', JSON.stringify(current));
            console.info('one data', JSON.stringify(oneData));
            setIsLoading(false);
            setCurrentWeatherData(current);
            setHourlyWeatherData(oneData.hourly);
            setDailyWeatherData(oneData.daily);
            setTimezoneOffset(oneData.timezone_offset);
          });
        })
        .catch(error => console.error('error: ', error));
    };
    fetchWeatherData();
  }, []);

  if (
    isLoading ||
    !currentWeatherData ||
    !dailyWeatherData ||
    !hourlyWeatherData
  ) {
    return (
      <View>
        <Text>Getting Weather Data</Text>
      </View>
    );
  }

  return (
    <View style={currentWeatherStyles.container}>
      {console.log('State: ', {dailyWeatherData})}
      <View style={currentWeatherStyles.titleContainer}>
        <Text
          style={
            currentWeatherStyles.titleText
          }>{`${currentWeatherData.name.replace('-', ' ')}`}</Text>
        <Image
          source={{uri: getIcon(currentWeatherData.weather[0].icon)}}
          style={currentWeatherStyles.image}
        />
        <View style={currentWeatherStyles.tempContainer}>
          <Text
            style={
              currentWeatherStyles.currentTemp
            }>{`${currentWeatherData.main.temp}`}</Text>
          <View style={currentWeatherStyles.highLowTemp}>
            <Text
              style={
                currentWeatherStyles.tempItem
              }>{`L: ${currentWeatherData.main.temp_min}`}</Text>
            <Text
              style={
                currentWeatherStyles.tempItem
              }>{`H: ${currentWeatherData.main.temp_max}`}</Text>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={currentWeatherStyles.hourlyScrollContainer}>
          {hourlyWeatherData.map(hour => (
            <HourlyWeatherItem
              currentUnixTime={hour.dt}
              offset={timezoneOffset}
              temp={hour.temp}
            />
          ))}
        </ScrollView>
        <View style={currentWeatherStyles.dailyScrollContainer}>
          {dailyWeatherData.map(day => (
            <DailyWeatherItem
              currentUnixTime={day.dt}
              offset={timezoneOffset}
              temp={day.temp.day}
              iconUrl={getIcon(day.weather[0].icon)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CurrentWeather;
