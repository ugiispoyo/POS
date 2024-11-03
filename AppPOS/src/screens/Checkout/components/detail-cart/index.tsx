import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import numberToIDR from '@utils/numberToIDR';
import ItemCart from '../item-cart';
import TextInput from '@components/TextInput';
import Button from '@components/Button';

import {useProps} from '@screens/Checkout/context';
import {useGlobalProps} from '@context/context';

export default function DetailCart(): React.JSX.Element {
  const {hookForm, onCheckout} = useProps();
  const {state} = useGlobalProps();

  const product = state.Casier?.cart?.items;

  const totalItems = state.Casier?.cart?.totalItems;

  const totalOriginalAmount = state.Casier?.cart?.totalOriginalAmount;
  const totalAfterDiscount = state.Casier?.cart?.totalFixAmount;

  return (
    <>
      <ScrollView
        style={{
          marginTop: 110,
          marginBottom: 300,
        }}>
        {product.map((item, i) => (
          <ItemCart key={i} Item={item} index={i} />
        ))}
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 300,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#f5f5f5',
          paddingHorizontal: 16,
          paddingVertical: 10,
        }}>
        <View
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
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
        <View
          style={{
            width: '100%',
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
          }}>
          <TextInput
            keyboardType="number-pad"
            label="Nominal bayar"
            hookForm={hookForm}
            isFormatCurrency
            name="nominal"
            hookOptions={{
              required: 'Wajib diisi!',
              min: {
                value: totalAfterDiscount,
                message: 'Nominal tidak cukup!',
              },
            }}
            style={{width: '100%'}}
          />
          <TextInput
            label="Alamat Rumah"
            hookForm={hookForm}
            isFormatCurrency
            name="address"
            hookOptions={{
              required: 'Wajib diisi!',
            }}
            style={{width: '100%'}}
          />
          <Button
            style={{width: '100%'}}
            onPress={hookForm.handleSubmit(onCheckout)}
            disabled={
              state.loading.isLoading && state.loading.module === 'CHECKOUT'
            }>
            {state.loading.isLoading && state.loading.module === 'CHECKOUT'
              ? 'Sedang diproses...'
              : 'Bayar'}
          </Button>
        </View>
      </View>
    </>
  );
}
