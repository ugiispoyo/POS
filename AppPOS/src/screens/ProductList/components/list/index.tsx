import React from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Platform,
  RefreshControl
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import numberToIDR from '@utils/numberToIDR';

import styles from '../../styles';

import { T_ListProducts } from '@store/types';
import { useProps } from '@screens/ProductList/context';
import { T_ProductListCTX } from '@screens/ProductList/types';
import { useGlobalProps } from '@context/context';
import { T_GlobalContextCTX } from '@context/types';

export default function List(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const { Products, ProductList, dispatch, hostname, loading } = useProps() as T_ProductListCTX;
  const { getDataProducts } = useGlobalProps() as T_GlobalContextCTX;
  const ListProducts = Products;

  const Item = (Item: { index: number } & T_ListProducts) => {
    const stylePrice =
      Item.isDiscount === "1" &&
      StyleSheet.create({
        price: {
          marginLeft: 7,
          fontSize: 13,
          color: '#777',
          textDecorationLine: 'line-through',
        },
      }).price;

    const isActive =
      ProductList.action.hasAction &&
      ProductList.action.id === Item.id + Item.index;

    const styleDeactive = !isActive
      ? StyleSheet.create({
        item: {
          borderBottomRightRadius: 10,
        },
      }).item
      : {};

    return (
      <View style={{ position: 'relative' }}>
        <Pressable
          style={{ ...styles.item, ...styleDeactive }}
          onPress={() =>
            dispatch({
              type: 'SET_ACTION_PRODUCT_LIST',
              value: {
                hasAction: !isActive,
                id: isActive ? '' : Item.id + Item.index,
              },
            })
          }>
          <Image style={styles.itemImg} source={{ uri: `${hostname}/storage/${Item.image}` }} />
          <Text style={styles.itemTextName}>{Item.name}</Text>
          <View style={{ display: 'flex', width: '33%', marginLeft: 3 }}>
            {Item.isDiscount === "1" ? (
              <>
                <Text
                  style={{
                    ...styles.itemTextName,
                    fontWeight: '600',
                    width: '100%',
                  }}>
                  {numberToIDR(Item.priceAfterDiscount ?? 0)}
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
            <Text style={{ color: '#000' }}>{Item.stock ?? "-"}</Text>
          </View>
          {Item.isDiscount === "1" && (
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
            // style={{ marginRight: 20 }}
            onPress={() =>
              navigation.navigate('ProductAddEdit', { id: Item.id })
            }>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('@assets/icons/edit.png')}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('@assets/icons/trash.png')}
            />
          </TouchableOpacity> */}
        </Animated.View>
      </View>
    );
  };

  return (
    <View style={{ height: '100%', padding: 20 }}>
      <View style={styles.itemHeaderList}>
        <Text style={{ color: '#000', width: '15%', fontWeight: '900' }}>
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
            width: Platform.OS === 'android' ? '17%' : '20%',
            marginLeft: 10,
            fontWeight: '900',
          }}>
          Jumlah
        </Text>
      </View>
      {!loading.isLoading && loading.module !== "PRODUCT_LIST" ?
        <>
          {
            ListProducts.length !== 0 ?

              <FlatList
                style={{ flexGrow: 0, height: Platform.OS === 'ios' ? '90%' : '84%' }}
                data={ListProducts}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => <Item {...{ index, ...item }} />}
                keyExtractor={(item, index) => item.id + index}
                ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
                refreshControl={
                  <RefreshControl refreshing={loading.isLoading} onRefresh={getDataProducts} />}
              />
              :
              <Text
                style={{
                  color: '#000',
                  width: '100%',
                  marginLeft: 15,
                  fontWeight: '900',
                  textAlign: 'center'
                }}>
                Data tidak ditemukan!
              </Text>
          }
        </>
        :
        <View>
          <Text
            style={{
              color: '#000',
              width: '100%',
              marginLeft: 15,
              fontWeight: '900',
              textAlign: 'center'
            }}>Sedang mengambil data...</Text>
        </View>
      }
    </View>
  );
}
