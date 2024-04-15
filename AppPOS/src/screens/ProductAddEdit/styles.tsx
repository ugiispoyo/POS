import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  wrapForm: {
    height: 'auto',
    minHeight: '85%',
    paddingBottom: 20,
    paddingHorizontal: 20,
    position: 'relative',
  },
  contentForm: {
    backgroundColor: '#fff',
    height: 'auto',
    maxHeight: '100%',
    minHeight: 300,
    borderRadius: 10,
    padding: 20,
  },
  wrapBtn: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  wrapInputField: {
    marginBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});
