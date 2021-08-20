import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const getCurrentHourString = unixTime => {
  const d = new Date(unixTime * 1000);
  const hour = d.getHours();
  if (hour >= 12) {
    return `${hour - 12}PM`;
  }

  if (hour === 0) {
    return '12AM';
  }

  return `${hour}AM`;
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textItem: {
    color: 'white',
  },
  line: {
    height: 1,
    width: 30,
    backgroundColor: 'white',
    margin: 3,
  },
});

const HourlyWeatherItem = ({currentUnixTime, offset, temp}) => (
  <View style={styles.container}>
    <Text style={styles.textItem}>{`${getCurrentHourString(
      currentUnixTime + offset,
    )}`}</Text>
    <View style={styles.line} />
    <Text style={styles.textItem}>{temp}</Text>
  </View>
);

export default HourlyWeatherItem;
