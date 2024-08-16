import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';

import Button from '@components/Button';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';
import {useProps} from '@screens/Home/context';
import {T_HomeCTX} from '@screens/Home/types';

const ModalReport = () => {
  const {downloadReport} = useProps() as T_HomeCTX;
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  return (
    <Modal
      isVisible={state.Home.showModalReport}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}>
      <View
        style={{
          backgroundColor: '#fff',
          width: '100%',
          minHeight: 150,
          borderRadius: 8,
          padding: 16,
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Button
          onPress={() => {
            dispatch({Home: {showModalReport: false}});
          }}
          style={{
            backgroundColor: 'none',
            position: 'absolute',
            right: 5,
            width: 40,
          }}>
          <Image
            style={{width: 25, height: 25}}
            source={require('@assets/icons/close.png')}
          />
        </Button>
        <Text
          style={{
            fontWeight: '600',
            color: '#608B55',
            marginTop: 16,
            fontSize: 24,
            textAlign: 'center',
          }}>
          Pilih format report
        </Text>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={() => downloadReport('pdf')}
            style={{
              marginTop: 20,
              width: '48%',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 70, height: 70}}
              source={require('@assets/icons/pdf.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => downloadReport('xlsx')}
            style={{
              marginTop: 20,
              width: '48%',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Image
              style={{width: 70, height: 70}}
              source={require('@assets/icons/xlsx.webp')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalReport;
