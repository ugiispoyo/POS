import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import Button from '@components/Button';

import numberToIDR from '@utils/numberToIDR';
import {T_CartItems} from '@store/types';

import styles from '../../styles';

import {useProps} from '@screens/Casier/context';
import {T_CasierCTX} from '@screens/Casier/types';

const ItemCart = ({
  Item,
  index,
}: {
  Item: T_CartItems;
  index: number;
}): React.JSX.Element => {
  const {Casier, hostname, dispatch} = useProps() as T_CasierCTX;

  const totalItem = Casier.cart?.items?.length;

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

  return (
    <View
      style={{position: 'relative', paddingHorizontal: 10, marginBottom: 10}}>
      <View
        style={{
          ...styles.itemCart,
          backgroundColor: '#fff',
          borderRadius: 10,
          borderWidth: 0,
          borderBottomWidth: index + 1 !== totalItem ? 1 : 0,
        }}>
        <Image
          style={styles.itemCartImg}
          source={{uri: `${hostname}/storage/app/public/${Item.image}`}}
        />
        <Text style={styles.itemCartTextName}>{Item?.name}</Text>
        <View style={{display: 'flex', width: '27%', marginLeft: 3}}>
          {Item?.isDiscount === '1' ? (
            <>
              <Text
                style={{
                  ...styles.itemCartTextName,
                  fontWeight: '600',
                  width: '100%',
                }}>
                {numberToIDR(Item?.priceAfterDiscount || 0)}
              </Text>
              <Text
                style={{
                  ...styles.itemCartTextName,
                  ...stylePrice,
                  fontWeight: '600',
                  width: '100%',
                }}>
                {numberToIDR(Item?.price)}
              </Text>
            </>
          ) : (
            <Text
              style={{
                ...styles.itemCartTextName,
                ...stylePrice,
                fontWeight: '600',
                width: '100%',
              }}>
              {numberToIDR(Item?.price)}
            </Text>
          )}
        </View>
        <View style={styles.itemCartViewPcs}>
          <Button
            style={{width: 35, height: 35}}
            onPress={() =>
              dispatch({
                type: 'ADD_OR_MIN_CART',
                value: {id: Item?.id, AddOrMin: '-'},
              })
            }>
            -
          </Button>
          <Text style={{color: '#000', fontWeight: '600', fontSize: 16}}>
            {Item?.total}
          </Text>
          <Button
            style={{width: 35, height: 35}}
            onPress={() =>
              dispatch({
                type: 'ADD_OR_MIN_CART',
                value: {id: Item?.id, AddOrMin: '+'},
              })
            }>
            +
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
