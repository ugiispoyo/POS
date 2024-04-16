import React from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import numberToIDR from '@utils/numberToIDR';

import styles from '../../styles';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';
import {useProps} from '@screens/Casier/context';
import {T_ListProducts, T_CasierCTX} from '@screens/Casier/types';

export default function List(): React.JSX.Element {
  const {dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const {ListProducts} = useProps() as T_CasierCTX;

  const Item = (Item: {index: number} & T_ListProducts) => {
    const stylePrice =
      Item.isDiscount &&
      StyleSheet.create({
        price: {
          fontSize: 10,
          color: '#777',
          textDecorationLine: 'line-through',
        },
      }).price;

    return (
      <View style={{position: 'relative'}}>
        <Pressable
          style={{...styles.item}}
          onPress={() => {
            dispatch({
              type: 'SET_DETAIL_PRODUCT',
              value: Item,
            });
          }}>
          <Image style={styles.itemImg} source={{uri: Item.image}} />
          <Text style={styles.itemTextName} numberOfLines={1}>
            {Item.name}
          </Text>
          <View style={styles.itemViewDetail}>
            <View style={{display: 'flex', width: '50%'}}>
              {Item.isDiscount ? (
                <>
                  <Text
                    style={{
                      ...styles.itemTextPrice,
                      fontWeight: '600',
                      width: '100%',
                    }}>
                    {numberToIDR(Item.priceAfterDiscount)}
                  </Text>
                  <Text
                    style={{
                      ...styles.itemTextPrice,
                      ...stylePrice,
                      fontWeight: '600',
                      width: '100%',
                    }}>
                    {numberToIDR(Item.price)}
                  </Text>
                </>
              ) : (
                <Text
                  style={{
                    ...styles.itemTextPrice,
                    ...stylePrice,
                    fontWeight: '600',
                    width: '100%',
                  }}>
                  {numberToIDR(Item.price)}
                </Text>
              )}
            </View>
            <Text style={{color: '#000', fontSize: 11}}>{Item.stock}</Text>
          </View>
          {Item.isDiscount && (
            <Image
              style={styles.itemImgDiscount}
              source={require('@assets/icons/discount.png')}
            />
          )}
        </Pressable>
      </View>
    );
  };

  return (
    <View style={{height: '83%', padding: 20, marginTop: 90}}>
      <FlatList
        style={{flexGrow: 0, height: '100%'}}
        key={2}
        numColumns={2}
        contentContainerStyle={{width: '100%'}}
        data={ListProducts}
        renderItem={({item, index}) => <Item {...{index, ...item}} />}
        keyExtractor={(item, index) => item.id + index}
      />
    </View>
  );
}
