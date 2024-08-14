import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Dimensions, Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown} from 'react-native-reanimated';

import Button from '@components/Button';

import styles from '../../styles';
import numberToIDR from '@utils/numberToIDR';
import ItemCart from '../item-cart';

import {T_CasierCTX} from '@screens/Casier/types';
import {useProps} from '@screens/Casier/context';

export default function DetailCart(): React.JSX.Element {
  const navigation = useNavigation() as any;
  const {Casier} = useProps() as T_CasierCTX;

  const [open, setOpen] = useState<boolean>(false);
  const [zIndex, setZindex] = useState<number>(0);
  const sheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(
    () => ['12%', '90%', Dimensions.get('screen').height],
    [],
  );

  const product = Casier?.cart?.items;

  const totalPrice =
    Casier?.cart?.totalFixAmount !== Casier?.cart?.totalOriginalAmount
      ? Casier?.cart?.totalFixAmount
      : Casier?.cart?.totalOriginalAmount;

  const totalItems = Casier?.cart?.totalItems;

  const totalOriginalAmount = Casier?.cart?.totalOriginalAmount;
  const totalAfterDiscount = Casier?.cart?.totalFixAmount;

  useEffect(() => {
    if (product.length !== 0 && !open) {
      handleSnapPress();
    }
    if (product.length === 0 && open) {
      handleClosePress();
    }
  }, [Casier]);

  const handleSnapPress = useCallback(() => {
    setOpen(true);
    sheetRef.current?.snapToIndex(0);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setTimeout(() => {
      setZindex(0);
      setOpen(false);
    }, 10);
  }, []);

  const handleSheetChange = useCallback((index: number) => {
    if (index !== 0) {
      setZindex(9);
    } else {
      setZindex(0);
    }
  }, []);

  // const renderItem = useCallback((Item: T_CartItems, i: number) => {
  //   return <ItemCart Item={Item} index={i} />;
  // }, []);

  return (
    <>
      {open && (
        <>
          {zIndex !== 0 && <View style={styles.backDrop} />}
          <Pressable
            onPress={() => {
              setZindex(9);
              sheetRef.current?.snapToIndex(1);
            }}
            style={{
              ...styles.wrapDetailProduct,
              height: '100%',
              zIndex: zIndex,
              borderRadius: 14,
            }}>
            <BottomSheet
              ref={sheetRef}
              index={0}
              snapPoints={snapPoints}
              handleIndicatorStyle={{
                display: zIndex === 0 ? 'none' : 'flex',
                backgroundColor: '#608B55',
              }}
              style={{
                borderRadius: 14,
                backgroundColor: '#fff',
                shadowColor: '#000',
                shadowOffset: {width: 20, height: 20},
                shadowOpacity: 1,
                shadowRadius: 20,
                elevation: 20,
              }}
              handleStyle={{
                backgroundColor: '#fff',
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
              }}
              enableDynamicSizing
              onChange={handleSheetChange}
              // enableHandlePanningGesture={false}
              // enableContentPanningGesture={false}
              enableHandlePanningGesture={zIndex === 0 ? false : true}
              enableContentPanningGesture={zIndex === 0 ? false : true}>
              <View
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                {zIndex === 0 ? (
                  <Animated.View
                    entering={FadeInDown.delay(200)}
                    style={styles.wrapItemCart}>
                    <DropShadow style={styles.shadowItemCart}>
                      <Pressable
                        onPress={() => {
                          setZindex(9);
                          sheetRef.current?.snapToIndex(1);
                        }}
                        style={styles.btnItemCart}>
                        <Text style={styles.textItemCart}>
                          {totalItems} item
                        </Text>
                        <View style={styles.wrapPriceCart}>
                          <Text style={styles.textPriceCart}>
                            {numberToIDR(totalPrice)}
                          </Text>
                          <Image
                            source={require('@assets/icons/cart-full.png')}
                            style={{width: 25, height: 25}}
                          />
                        </View>
                      </Pressable>
                    </DropShadow>
                  </Animated.View>
                ) : (
                  <DropShadow
                    style={{
                      ...styles.shadowHeaderFooterCart,
                      marginBottom: 3,
                    }}>
                    <View style={{backgroundColor: '#fff', width: '100%'}}>
                      <Text style={styles.textItemKeranjang}>
                        Item Keranjang
                      </Text>
                    </View>
                  </DropShadow>
                )}
                <BottomSheetScrollView showsVerticalScrollIndicator={false}>
                  {product.map((item, i) => (
                    <ItemCart key={i} Item={item} index={i} />
                  ))}
                </BottomSheetScrollView>
                <DropShadow
                  style={{
                    ...styles.shadowHeaderFooterCart,
                    marginTop: 3,
                  }}>
                  <View
                    style={{
                      width: '100%',
                      paddingHorizontal: 20,
                      paddingBottom: 20,
                      paddingTop: 10,
                      backgroundColor: '#fff',
                    }}>
                    <View style={styles.wrapFooterCart}>
                      {totalAfterDiscount !== totalOriginalAmount ? (
                        <View style={styles.wrapSubFooter}>
                          <View style={styles.wrapSubSubFooter}>
                            <Text
                              style={{
                                ...styles.textFooterCart,
                                fontSize: 18,
                                textDecorationLine: 'line-through',
                                fontWeight: '400',
                              }}>
                              {numberToIDR(totalOriginalAmount)}
                            </Text>
                            <Text style={styles.textFooterCart}>
                              {numberToIDR(totalAfterDiscount)}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '37%',
                            }}>
                            <Text
                              style={{
                                ...styles.textFooterCart,
                                textAlign: 'center',
                              }}>
                              {totalItems}
                            </Text>
                          </View>
                        </View>
                      ) : (
                        <View style={styles.wrapSubFooter}>
                          <View style={styles.wrapSubSubFooter}>
                            <Text style={styles.textFooterCart}>
                              {numberToIDR(totalOriginalAmount)}
                            </Text>
                          </View>
                          <View
                            style={{
                              width: '37%',
                            }}>
                            <Text
                              style={{
                                ...styles.textFooterCart,
                                textAlign: 'center',
                              }}>
                              {totalItems}
                            </Text>
                          </View>
                        </View>
                      )}
                    </View>
                    <DropShadow style={styles.shadowItemCart}>
                      <Button
                        style={{width: '100%'}}
                        onPress={() => navigation.navigate('Checkout')}>
                        Checkout
                      </Button>
                    </DropShadow>
                  </View>
                </DropShadow>
                {/* <BottomSheetFlatList
                  data={product}
                  keyExtractor={i => i.id}
                  renderItem={({item, index}) => renderItem(item, index)}
                  showsVerticalScrollIndicator={false}
                /> */}
              </View>
            </BottomSheet>
          </Pressable>
        </>
      )}
    </>
  );
}
