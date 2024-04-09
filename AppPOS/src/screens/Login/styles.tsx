import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  textLogin: {
    fontSize: 40,
    marginTop: 100,
    marginBottom: 50,
    color: '#fff',
    textAlign: 'left',
  },
  gr: {
    width: '100%',
    height: '80%',
    minHeight: 550,
    position: 'absolute',
    top: 0,
  },
  cardLogin: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
  },
  shadowCardLogin: {
    width: '90%',
    height: 280,
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  }
});
