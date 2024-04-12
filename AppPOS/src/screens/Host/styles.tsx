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
  textHost: {
    fontSize: 40,
    marginTop: 100,
    color: '#fff',
    textAlign: 'left',
  },
  bg: {
    width: '100%',
    height: '100%',
    minHeight: 550,
    position: 'absolute',
    backgroundColor: '#000000f2',
    top: 0,
  },
  bgImg: {
    width: '100%',
    height: '100%',
    minHeight: 700,
    position: 'absolute'
  },
  cardHost: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    padding: 20,
    position: 'relative',
    borderRadius: 10,
  },
  shadowCardHost: {
    width: '90%',
    height: 180,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 3,
    shadowRadius: 5,
  }
});