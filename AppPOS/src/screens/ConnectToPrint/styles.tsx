import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    top: 100
  },
  containerList: {flex: 1, flexDirection: 'column'},
  bluetoothStatusContainer: {justifyContent: 'flex-end', alignSelf: 'flex-end'},
  bluetoothStatus: {
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 2,
    color: 'white',
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  bluetoothInfo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#FFC806',
    marginBottom: 20,
  },
  sectionTitle: {fontWeight: 'bold', fontSize: 18, marginBottom: 12},
  printerInfo: {
    textAlign: 'center',
    fontSize: 16,
    color: '#E9493F',
    marginBottom: 20,
  },
});
