import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Button from '@components/Button';

import numberToIDR from '@utils/numberToIDR';
import {T_CartItems} from '@store/types';

import styles from '../../styles';
import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

const ItemCart = ({
  Item,
  index,
}: {
  Item: T_CartItems;
  index: number;
}): React.JSX.Element => {
  const {state} = useGlobalProps() as T_GlobalContextCTX;
  const {hostname} = state;

  const stylePrice =
    Item?.isDiscount === '1' &&
    StyleSheet.create({
      price: {
        marginLeft: 7,
        fontSize: 13,
        color: '#777',
        textDecorationLine: 'line-through',
      },
    }).price;

  const priceAfterDiscount: number =
    Item.isDiscount === '1' ? Item?.priceAfterDiscount || 0 : 0;

  return (
    <View style={{position: 'relative', paddingHorizontal: 10}}>
      <View
        style={{
          ...styles.itemCart,
          borderWidth: 0,
          borderBottomWidth: 1,
          borderTopWidth: index === 0 ? 1 : 0
        }}>
        <View style={{display: 'flex', width: '100%', flexDirection: 'row'}}>
          <Image
            style={styles.itemCartImg}
            source={{uri: `${hostname}/storage/${Item.image}`}}
          />
          <Text style={styles.itemCartTextName}>{Item?.name}</Text>
        </View>
        <View
          style={{
            width: '100%',
            marginTop: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Text style={{color: '#000', fontWeight: '600', fontSize: 16}}>
            {Item?.total}x
          </Text>
          {/* Price */}
          <View>
            {Item?.isDiscount === '1' ? (
              <View style={{display: 'flex'}}>
                <Text
                  style={{
                    ...styles.itemCartTextName,
                    fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {numberToIDR(priceAfterDiscount)}
                </Text>
                <Text
                  style={{
                    ...styles.itemCartTextName,
                    ...stylePrice,
                    fontWeight: '600',
                  }}>
                  {numberToIDR(Item?.price)}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  ...styles.itemCartTextName,
                  ...stylePrice,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {numberToIDR(Item?.price)}
              </Text>
            )}
          </View>

          {/* Price * item */}
          <View>
            {Item?.isDiscount === '1' ? (
              <View style={{display: 'flex'}}>
                <Text
                  style={{
                    ...styles.itemCartTextName,
                    fontWeight: '600',
                    fontSize: 15,
                  }}>
                  {numberToIDR(priceAfterDiscount * Item.total)}
                </Text>
                <Text
                  style={{
                    ...styles.itemCartTextName,
                    ...stylePrice,
                    fontWeight: '600',
                  }}>
                  {numberToIDR(Item?.price * Item?.total)}
                </Text>
              </View>
            ) : (
              <Text
                style={{
                  ...styles.itemCartTextName,
                  ...stylePrice,
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {numberToIDR(Item?.price * Item?.total)}
              </Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
