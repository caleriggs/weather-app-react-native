import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 100,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    width: '90%',
  },
  button: {
    backgroundColor: 'blue',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
});

export default styles;
