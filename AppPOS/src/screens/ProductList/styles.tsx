import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: '15%',
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
  itemHeaderList: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: 10,
    alignItems: 'center',
    width: '100%',
    minHeight: 70,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemImg: {
    width: '15%',
    height: 50,
    borderRadius: 10,
  },
  itemTextName: {
    color: '#333',
    marginLeft: 7,
    width: '33%',
    fontSize: 14,
  },
  itemViewPcs: {
    marginLeft: 7,
    width: '17%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImgDiscount: {
    width: 27,
    height: 27,
    position: 'absolute',
    top: -5,
    right: 0,
  },
});
