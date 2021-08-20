import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  header: {
    fontSize: 70,
    fontFamily: 'Helvetica',
    fontWeight: '100',
    marginTop: 40,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0E9594',
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    width: '90%',
  },
});

export const currentWeatherStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    flexDirection: 'column',
    minHeight: '35%',
  },
  titleText: {
    color: 'darkslategrey',
    fontSize: 40,
    fontWeight: '300',
  },
  image: {
    height: 80,
    width: 80,
    backgroundColor: '#E09E2B',
    borderRadius: 100,
  },
  tempContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E9594',
  },
  dailyScrollContainer: {
    margin: 20,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#0E9594',
  },
  hourlyScrollContainer: {
    margin: 20,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#941F15',
  },
  currentTemp: {
    flex: 1,
    color: 'darkslategrey',
    fontSize: 100,
    fontWeight: '100',
  },
  tempItem: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default styles;
