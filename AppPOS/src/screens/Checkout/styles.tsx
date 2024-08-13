import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  itemCart: {
    display: 'flex',
    position: 'relative',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    minHeight: 70,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'column',
    marginBottom: 10
  },
  itemCartImg: {
    width: '10%',
    height: 30,
    borderRadius: 10,
  },
  itemCartTextName: {
    color: '#333',
    marginLeft: 8,
    width: '90%',
    fontSize: 18,
  },
  itemCartViewPcs: {
    marginLeft: 7,
    width: '35%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
