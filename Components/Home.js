import React from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/styles';

const Home = props => {
  const {navigation} = props;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lets make a weather app!!!</Text>
      <Button
        onPress={() => Alert.alert('You pushed the button!')}
        title="Hello!"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CurrentWeather')}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
