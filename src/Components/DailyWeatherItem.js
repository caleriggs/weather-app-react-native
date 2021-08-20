import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const getStringDayOfWeek = dayNumber => {
  const daysOfTheWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return daysOfTheWeek[dayNumber];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textItem: {
    color: 'white',
    fontSize: 20,
  },
  icon: {
    height: 25,
    width: 25,
    borderRadius: 100,
    marginHorizontal: 5,
  },
  daysWithImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const DailyWeatherItem = ({currentUnixTime, offset, temp, iconUrl}) => {
  const timeWithOffset = (currentUnixTime + offset) * 1000;
  const d = new Date(timeWithOffset);
  console.log(d, timeWithOffset);
  return (
    <View style={styles.container}>
      <View style={styles.daysWithImage}>
        <Image source={{uri: iconUrl}} style={styles.icon} />
        <Text style={styles.textItem}>{`${getStringDayOfWeek(
          d.getDay(),
        )}`}</Text>
      </View>
      <Text style={styles.textItem}>{temp}</Text>
    </View>
  );
};

export default DailyWeatherItem;
