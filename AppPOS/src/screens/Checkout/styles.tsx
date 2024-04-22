import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get("screen").height,
    backgroundColor: '#f5f5f5',
  },
  navbar: {
    width: '100%',
    height: '5%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
});
