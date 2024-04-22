import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    minHeight: '10%',
  },
  headerImg: {
    width: '100%',
    height: 110,
  },
  headerWrapText: {
    width: '100%',
    height: 110,
    position: 'absolute',
    top: 0,
    backgroundColor: '#00000080',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '800',
    fontFamily: 'Arial',
    textTransform: 'capitalize',
  },
  headerRoundedBottom: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 20,
    bottom: 0,
  },
});
