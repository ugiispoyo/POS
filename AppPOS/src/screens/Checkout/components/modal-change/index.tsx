import React from 'react';
import {Dimensions, Image, Platform, Text, View} from 'react-native';

import Modal from 'react-native-modal';

import Button from '@components/Button';

import numberToIDR from '@utils/numberToIDR';

import {useNavigation} from '@react-navigation/native';

import {useProps} from '@screens/Checkout/context';
import {useGlobalProps} from '@context/context';

const ModalChange = () => {
  const navigation = useNavigation<any>();

  const {hookForm, onPrint} = useProps();
  const {state, dispatch} = useGlobalProps();
  const totalItems = state.Casier?.cart?.totalItems;

  const totalOriginalAmount = state.Casier?.cart?.totalOriginalAmount;
  const totalAfterDiscount = state.Casier?.cart?.totalFixAmount;

  const showModalChange = state.Checkout.isModalChange;
  const fixAmount =
    totalOriginalAmount !== totalAfterDiscount
      ? totalAfterDiscount
      : totalOriginalAmount;

  const change =
    hookForm.getValues('nominal') !== 0
      ? hookForm.getValues('nominal') - fixAmount
      : 0;

  const deviceWidth = Dimensions.get('window').width;
  const deviceHeight =
    Platform.OS === 'ios'
      ? Dimensions.get('window').height
      : require('react-native-extra-dimensions-android').get(
          'REAL_WINDOW_HEIGHT',
        );

  return (
    <Modal
      isVisible={showModalChange}
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
            dispatch({
              Casier: {
                cart: {
                  items: [],
                  totalFixAmount: 0,
                  totalItems: 0,
                  totalOriginalAmount: 0,
                },
                detailProduct: null,
              },
            });
            dispatch({Checkout: {isModalChange: false}});

            navigation.navigate('Casier');
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
          Berhasil
        </Text>
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            marginVertical: 10,
            flexDirection: 'row',
          }}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{color: '#000', fontSize: 17}}>Total Item</Text>
            <Text style={{color: '#000', fontSize: 18, fontWeight: '900'}}>
              {totalItems}
            </Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{color: '#000', fontSize: 17}}>Total Harga</Text>
            {totalAfterDiscount !== totalOriginalAmount ? (
              <View style={{display: 'flex'}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 18,
                    fontWeight: '900',
                  }}>
                  {numberToIDR(totalAfterDiscount)}
                </Text>
                <Text
                  style={{
                    fontWeight: '500',
                    textDecorationLine: 'line-through',
                  }}>
                  {numberToIDR(totalOriginalAmount)}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  color: '#000',
                  fontSize: 18,
                  fontWeight: '900',
                }}>
                {numberToIDR(totalOriginalAmount)}
              </Text>
            )}
          </View>
        </View>
        <Text
          style={{
            fontWeight: '400',
            color: '#000',
            fontSize: 16,
          }}>
          Nominal bayar:{' '}
          <Text style={{fontWeight: '700'}}>
            {numberToIDR(hookForm.getValues('nominal'))}
          </Text>
        </Text>
        <Text
          style={{
            fontWeight: '400',
            color: '#000',
            fontSize: 16,
          }}>
          Kembalian:{' '}
          <Text style={{fontWeight: '700'}}>{numberToIDR(change)}</Text>
        </Text>

        <Button
          style={{marginTop: 20, width: '100%'}}
          onPress={async () => await onPrint()}>
          Print
        </Button>
      </View>
    </Modal>
  );
};

export default ModalChange;
