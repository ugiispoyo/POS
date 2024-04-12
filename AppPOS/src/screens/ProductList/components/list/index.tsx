import React from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import numberToIDR from '@utils/numberToIDR';

import styles from '../../styles';

import {useProps} from '@screens/ProductList/context';
import {T_ListProducts, T_ProductListCTX} from '@screens/ProductList/types';

export default function List(): React.JSX.Element {
  const {ListProducts} = useProps() as T_ProductListCTX;

  const Item = (Item: T_ListProducts) => {
    const stylePrice =
      Item.isDiscount &&
      StyleSheet.create({
        price: {
          marginLeft: 7,
          fontSize: 13,
          color: '#777',
          textDecorationLine: 'line-through',
        },
      }).price;

    return (
      <TouchableOpacity style={styles.item}>
        <Image style={styles.itemImg} source={{uri: Item.image}} />
        <Text style={styles.itemTextName}>{Item.name}</Text>
        <View style={{display: 'flex', width: '33%', marginLeft: 3}}>
          {Item.isDiscount ? (
            <>
              <Text
                style={{
                  ...styles.itemTextName,
                  fontWeight: '600',
                  width: '100%',
                }}>
                {numberToIDR(Item.priceAfterDiscount)}
              </Text>
              <Text
                style={{
                  ...styles.itemTextName,
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
                ...styles.itemTextName,
                ...stylePrice,
                fontWeight: '600',
                width: '100%',
              }}>
              {numberToIDR(Item.price)}
            </Text>
          )}
        </View>
        <View style={styles.itemViewPcs}>
          <Text style={{color: '#000'}}>{Item.stock}</Text>
        </View>
        {Item.isDiscount && (
          <Image
            style={styles.itemImgDiscount}
            source={require('@assets/icons/discount.png')}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{height: '80%', padding: 20}}>
      <View style={styles.itemHeaderList}>
        <Text style={{color: '#000', width: '15%', fontWeight: '900'}}>
          Foto
        </Text>
        <Text
          style={{
            color: '#000',
            width: '31%',
            marginLeft: 7,
            fontWeight: '900',
          }}>
          Nama
        </Text>
        <Text
          style={{
            color: '#000',
            width: '28%',
            marginLeft: 15,
            fontWeight: '900',
          }}>
          Harga
        </Text>
        <Text
          style={{
            color: '#000',
            width: '17%',
            marginLeft: 10,
            fontWeight: '900',
          }}>
          Jumlah
        </Text>
      </View>
      <FlatList
        style={{flexGrow: 0, height: '100%'}}
        data={ListProducts}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
      />
    </View>
  );
}
