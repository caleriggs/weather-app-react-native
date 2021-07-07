import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

const styles = StyleSheet.create(
  {
    header: {
      fontSize: 100
    },
    container: {
      flex: 1,
      padding: 20,
      justifyContent: "center"
    }
  }
)

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Lets make a weather app!!!</Text>
    </SafeAreaView>
  );
};


export default App;
