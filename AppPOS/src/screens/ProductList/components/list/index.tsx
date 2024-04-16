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
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeInUp} from 'react-native-reanimated';

import numberToIDR from '@utils/numberToIDR';

import styles from '../../styles';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';
import {useProps} from '@screens/ProductList/context';
import {T_ListProducts, T_ProductListCTX} from '@screens/ProductList/types';

export default function List(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const {ListProducts} = useProps() as T_ProductListCTX;

  const Item = (Item: {index: number} & T_ListProducts) => {
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

    const isActive =
      state.ProductList.action.hasAction &&
      state.ProductList.action.id === Item.id + Item.index;

    const styleDeactive = !isActive
      ? StyleSheet.create({
          item: {
            borderBottomRightRadius: 10,
          },
        }).item
      : {};

    return (
      <View style={{position: 'relative'}}>
        <Pressable
          style={{...styles.item, ...styleDeactive}}
          onPress={() =>
            dispatch({
              type: 'SET_ACTION_PRODUCT_LIST',
              value: {
                hasAction: !isActive,
                id: isActive ? '' : Item.id + Item.index,
              },
            })
          }>
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
        </Pressable>
        {isActive && <Action {...Item} />}
      </View>
    );
  };

  const Action = (Item: T_ListProducts) => {
    return (
      <View style={styles.wrapActionOuter}>
        <Animated.View
          style={styles.wrapAction}
          entering={FadeInUp.duration(50).delay(10)}>
          <TouchableOpacity
            style={{marginRight: 20}}
            onPress={() =>
              navigation.navigate('ProductAddEdit', {id: Item.id})
            }>
            <Image
              style={{width: 25, height: 25}}
              source={require('@assets/icons/edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={{width: 25, height: 25}}
              source={require('@assets/icons/trash.png')}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
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
        renderItem={({item, index}) => <Item {...{index, ...item}} />}
        keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={() => <View style={{height: 15}} />}
      />
    </View>
  );
}
