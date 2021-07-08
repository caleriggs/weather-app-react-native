import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>WEATHER</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CurrentWeather')}>
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
