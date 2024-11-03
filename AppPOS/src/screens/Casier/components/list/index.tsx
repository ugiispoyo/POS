import React from 'react';
import {
  Image,
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Platform,
  RefreshControl,
} from 'react-native';

import numberToIDR from '@utils/numberToIDR';
import Button from '@components/Button';

import styles from '../../styles';

import {useProps} from '@screens/Casier/context';
import {T_CasierCTX} from '@screens/Casier/types';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';
import {T_ListProducts} from '@store/types';

export default function List(): React.JSX.Element {
  const {getDataProducts} = useGlobalProps() as T_GlobalContextCTX;
  const {hostname, loading, dispatch, Products, Casier} =
    useProps() as T_CasierCTX;

  const ListProducts = Products;
  const listCart = Casier.cart.items;

  const Item = (Item: T_ListProducts) => {
    const stylePrice =
      Item.isDiscount === '1' &&
      StyleSheet.create({
        price: {
          fontSize: 10,
          color: '#777',
          textDecorationLine: 'line-through',
        },
      }).price;

    return (
      <View style={styles.item}>
        <Pressable
          style={{width: '100%', paddingHorizontal: 10}}
          onPress={() => {
            dispatch({
              type: 'SET_DETAIL_PRODUCT',
              value: Item,
            });
          }}>
          <Image
            style={styles.itemImg}
            source={{uri: `${hostname}/storage/app/public/${Item.image}`}}
          />
          <Text style={styles.itemTextName} numberOfLines={1}>
            {Item.name}
          </Text>
          <View style={styles.itemViewDetail}>
            <View style={{display: 'flex', width: '50%'}}>
              {Item.isDiscount === '1' ? (
                <>
                  <Text
                    style={{
                      ...styles.itemTextPrice,
                      fontWeight: '600',
                      width: '100%',
                    }}>
                    {numberToIDR(Item.priceAfterDiscount || 0)}
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
        </Pressable>
        {Item.isDiscount === '1' && (
          <Image
            style={styles.itemImgDiscount}
            source={require('@assets/icons/discount.png')}
          />
        )}
        <Button
          style={styles.btnCart}
          onPress={() => dispatch({type: 'ADD_TO_CART', value: Item})}>
          <>
            <Image
              style={{width: 20, height: 20, marginRight: 5}}
              source={require('@assets/icons/add-cart.png')}
            />
            <Text style={{fontSize: 14, color: '#fff', fontWeight: '600'}}>
              Tambah
            </Text>
          </>
        </Button>
      </View>
    );
  };

  return (
    <View
      style={{
        height:
          listCart.length === 0
            ? Platform.OS === 'ios'
              ? '100%'
              : '90%'
            : Platform.OS === 'ios'
            ? '88%'
            : '79%',
        // height: '90%',
        paddingHorizontal: 20,
        paddingBottom: 20,
        paddingTop: 1,
        marginTop: Platform.OS === 'ios' ? 50 : 90,
        zIndex: 1,
        position: 'relative',
      }}>
      <View style={{paddingBottom: 2}}>
        {!loading.isLoading &&
        loading.module !== 'PRODUCT_LIST' &&
        ListProducts.length > 0 ? (
          <>
            {ListProducts.length !== 0 ? (
              <FlatList
                style={{height: '100%'}}
                key={2}
                // onScroll={scrollHandler}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{width: '100%', zIndex: 2}}
                refreshControl={
                  <RefreshControl
                    refreshing={loading.isLoading}
                    onRefresh={getDataProducts}
                  />
                }
                data={ListProducts}
                renderItem={({item}) => <Item {...item} />}
                keyExtractor={item => item.id}
              />
            ) : (
              <Text
                style={{
                  color: '#000',
                  width: '100%',
                  marginLeft: 15,
                  fontWeight: '900',
                  textAlign: 'center',
                }}>
                Data tidak ditemukan!
              </Text>
            )}
          </>
        ) : (
          <View>
            <Text
              style={{
                color: '#000',
                width: '100%',
                marginLeft: 15,
                fontWeight: '900',
                textAlign: 'center',
              }}>
              Sedang mengambil data...
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
