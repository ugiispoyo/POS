import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  body: {
    position: 'relative',
    width: '100%',
    height: '100%',
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fafafa'
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
  wrapActionOuter: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  wrapAction: {
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#aaa',
    padding: 15,
    minWidth: 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fafafa'
  }
});
