import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CurrentWeather from './src/Components/CurrentWeather';
import Home from './src/Components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Weather App', headerShown: false}}
        />
        <Stack.Screen
          name="CurrentWeather"
          component={CurrentWeather}
          options={{title: 'Current Weather'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
