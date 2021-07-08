import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 100,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default styles;
