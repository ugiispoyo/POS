import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: "#f5f5f5"
  },
  header: {
    width: '100%',
  },
  headerImg: {
    width: '100%',
    height: 250,
  },
  headerWrapText: {
    width: '100%',
    height: 250,
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
    fontWeight: "800",
    fontFamily: "Arial"
  },
  headerTextMak: {
    fontSize: 50,
    color: '#fff',
    fontFamily: 'GloriaHallelujah-Regular',
  },
  headerRoundedBottom: {
    position: 'absolute',
    backgroundColor: '#f5f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 50,
    bottom: 0,
  },
  wrapCard: {
    width: '100%',
    height: 400,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 20
  },
  btnCard: {
    width: '43%',
    height: '43%',
    position: 'relative',
    borderColor: '#bbb',
    borderWidth: 1,
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 20
  },
  wrapBtnCard: {
    paddingTop: 16,
    width: '100%',
    height: '100%',
  },
  imgCard: {
    width: '100%',
    height: '100%',
  },
  textCard: {
    marginTop: 8,
    color: '#555',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center'
  }
});
