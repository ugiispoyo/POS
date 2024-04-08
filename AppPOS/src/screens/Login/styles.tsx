import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    height: '38%',
    shadowColor: '#171717',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelInputText: {
    color: '#0f97ce',
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '600',
  },
  inputText: {
    backgroundColor: '#ebebeb',
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
  },
  button: {
    backgroundColor: '#0f97ce',
    height: 45,
    width: '70%',
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  }
});

export default styles;
