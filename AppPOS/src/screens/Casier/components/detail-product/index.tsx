import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import Button from '@components/Button';

import styles from '../../styles';
import numberToIDR from '@utils/numberToIDR';

import {useProps} from '@screens/Casier/context';
import {T_CasierCTX} from '@screens/Casier/types';

export default function DetailProduct(): React.JSX.Element {
  const {Casier, hostname, dispatch} = useProps() as T_CasierCTX;

  const [open, setOpen] = useState<boolean>(false);
  const sheetRef = useRef<BottomSheet>(null);

  const product = Casier?.detailProduct;

  const snapPoints = useMemo(() => ['60%'], []);

  useEffect(() => {
    if (product !== null && !open) {
      handleSnapPress();
    }
    if (product === null && open) {
      handleClosePress();
    }
  }, [Casier]);

  const handleSnapPress = useCallback(() => {
    setOpen(true);
    sheetRef.current?.snapToIndex(0);
  }, []);

  const handleClosePress = useCallback(() => {
    dispatch({type: 'SET_DETAIL_PRODUCT', value: null});
    sheetRef.current?.close();
    if (Platform.OS === 'android') {
      setTimeout(() => {
        setOpen(false);
      }, 10);
    } else {
      setOpen(false);
    }
  }, []);

  const stylePrice =
    product?.isDiscount === '1' &&
    StyleSheet.create({
      price: {
        fontSize: 10,
        color: '#777',
        textDecorationLine: 'line-through',
      },
    }).price;

  return (
    <>
      {open && (
        <>
          <View style={styles.backDrop} />
          <View style={styles.wrapDetailProduct}>
            <BottomSheet
              ref={sheetRef}
              index={0}
              snapPoints={snapPoints}
              enableDynamicSizing>
              <BottomSheetScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.containerBottomSheet}>
                <Text style={styles.textDetailProduct}>{product?.name}</Text>
                {product !== null && (
                  <Image
                    source={{uri: `${hostname}/storage/app/public/${product.image}`}}
                    style={styles.imgDetailProduct}
                  />
                )}
                <Text
                  style={{
                    ...styles.textDetailProduct,
                    fontSize: 16,
                  }}>
                  {product?.description}
                </Text>

                {product?.isDiscount === '1' && (
                  <Image
                    style={{
                      ...styles.itemImgDiscount,
                      ...styles.imgDiscountDetailProduct,
                    }}
                    source={require('@assets/icons/discount.png')}
                  />
                )}

                <View style={styles.itemViewDetail}>
                  <View style={{display: 'flex', width: '50%'}}>
                    {product?.isDiscount === '1' ? (
                      <>
                        <Text
                          style={{
                            ...styles.itemTextPrice,
                            fontWeight: '600',
                            fontSize: 20,
                            width: '100%',
                          }}>
                          {numberToIDR(product?.priceAfterDiscount || 0)}
                        </Text>
                        <Text
                          style={{
                            ...styles.itemTextPrice,
                            ...stylePrice,
                            fontWeight: '600',
                            fontSize: 14,
                            width: '100%',
                          }}>
                          {numberToIDR(product?.price)}
                        </Text>
                      </>
                    ) : (
                      <Text
                        style={{
                          ...styles.itemTextPrice,
                          ...stylePrice,
                          fontWeight: '600',
                          fontSize: 20,
                          width: '100%',
                        }}>
                        {numberToIDR(product?.price ?? 0)}
                      </Text>
                    )}
                  </View>
                  <Text style={{color: '#000', fontSize: 16}}>
                    {product?.stock}
                  </Text>
                </View>
                <View style={styles.wrapBtnDetailProduct}>
                  <Button
                    style={{
                      ...styles.btnCart,
                      ...styles.btnDetailProduct,
                      backgroundColor: '#f39c20',
                      width: '30%',
                    }}
                    onPress={() => handleClosePress()}>
                    <Text
                      style={{fontSize: 15, color: '#fff', fontWeight: '600'}}>
                      Close
                    </Text>
                  </Button>
                  <Button
                    style={{
                      ...styles.btnCart,
                      ...styles.btnDetailProduct,
                      width: '65%',
                    }}
                    onPress={() => {
                      dispatch({type: 'ADD_TO_CART', value: product});
                      handleClosePress();
                    }}>
                    <>
                      <Image
                        style={{width: 20, height: 20, marginRight: 5}}
                        source={require('@assets/icons/add-cart.png')}
                      />
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#fff',
                          fontWeight: '600',
                        }}>
                        Tambah
                      </Text>
                    </>
                  </Button>
                </View>
              </BottomSheetScrollView>
            </BottomSheet>
          </View>
        </>
      )}
    </>
  );
}
