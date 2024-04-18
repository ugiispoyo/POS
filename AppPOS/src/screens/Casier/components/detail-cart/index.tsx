import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown} from 'react-native-reanimated';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

import styles from '../../styles';
import numberToIDR from '@utils/numberToIDR';
import {T_Cart} from '@store/types';

export default function DetailCart(): React.JSX.Element {
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const [open, setOpen] = useState<boolean>(false);
  const [zIndex, setZindex] = useState<number>(0);
  const sheetRef = useRef<BottomSheet>(null);

  const product = state.Casier?.cart;

  const snapPoints = useMemo(() => ['12%', '90%'], []);

  useEffect(() => {}, [open, state]);

  useEffect(() => {
    if (product.length !== 0 && !open) {
      handleSnapPress();
    }
    if (product.length === 0 && open) {
      handleClosePress();
    }
  }, [state]);

  const handleSnapPress = useCallback(() => {
    setOpen(true);
    sheetRef.current?.snapToIndex(0);
  }, []);

  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
    setTimeout(() => {
      setOpen(false);
    }, 10);
  }, []);

  const handleSheetChange = useCallback((index: number) => {
    if (index === 1) {
      setZindex(9);
    } else {
      setZindex(0);
    }
  }, []);

  const renderItem = useCallback((Item: T_Cart) => {
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
      <View
        style={{position: 'relative', paddingHorizontal: 10, marginBottom: 10}}>
        <View
          style={{
            ...styles.itemCart,
            backgroundColor: '#fff',
            borderRadius: 10,
            borderWidth: 0,
          }}>
          <Image style={styles.itemCartImg} source={{uri: Item.image}} />
          <Text style={styles.itemCartTextName}>{Item.name}</Text>
          <View style={{display: 'flex', width: '33%', marginLeft: 3}}>
            {Item.isDiscount ? (
              <>
                <Text
                  style={{
                    ...styles.itemCartTextName,
                    fontWeight: '600',
                    width: '100%',
                  }}>
                  {numberToIDR(Item.priceAfterDiscount)}
                </Text>
                <Text
                  style={{
                    ...styles.itemCartTextName,
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
                  ...styles.itemCartTextName,
                  ...stylePrice,
                  fontWeight: '600',
                  width: '100%',
                }}>
                {numberToIDR(Item.price)}
              </Text>
            )}
          </View>
          <View style={styles.itemCartViewPcs}>
            <Text style={{color: '#000'}}>{Item.stock}</Text>
          </View>
        </View>
      </View>
    );
  }, []);

  return (
    <>
      {open && (
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
            }}
            handleStyle={{
              backgroundColor: '#fff',
              borderTopLeftRadius: 14,
              borderTopRightRadius: 14,
            }}
            onChange={handleSheetChange}
            enableHandlePanningGesture={zIndex === 0 ? false : true}
            enableContentPanningGesture={zIndex === 0 ? false : true}>
            <View
              style={{
                width: '100%',
                height: '100%',
              }}>
              {zIndex === 0 && (
                <Animated.View
                  entering={FadeInDown.delay(50).duration(50)}
                  style={{
                    width: '100%',
                    height: '7%',
                    paddingHorizontal: 18,
                    marginBottom: 20,
                  }}>
                  <DropShadow
                    style={{
                      shadowColor: '#171717',
                      shadowOffset: {width: 0, height: 5},
                      shadowOpacity: 0.4,
                      shadowRadius: 3,
                    }}>
                    <Pressable
                      onPress={() => {
                        setZindex(9);
                        sheetRef.current?.snapToIndex(1);
                      }}
                      style={{
                        width: '100%',
                        minHeight: 55,
                        height: 'auto',
                        paddingHorizontal: 20,
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: '#608B55',
                        borderRadius: 20,
                        marginBottom: 25,
                      }}>
                      <Text
                        style={{
                          color: '#fff',
                          fontWeight: '700',
                          fontSize: 18,
                        }}>
                        10 item
                      </Text>
                      <View
                        style={{
                          width: '75%',
                          height: '100%',
                          alignItems: 'center',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'flex-end',
                        }}>
                        <Text
                          style={{
                            color: '#fff',
                            fontWeight: '700',
                            fontSize: 16,
                          }}>
                          Rp. 130.000{' '}
                        </Text>
                        <Image
                          source={require('@assets/icons/cart-full.png')}
                          style={{width: 25, height: 25}}
                        />
                      </View>
                    </Pressable>
                  </DropShadow>
                </Animated.View>
              )}
              <BottomSheetFlatList
                data={product}
                keyExtractor={i => i.id}
                renderItem={({item}) => renderItem(item)}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </BottomSheet>
        </Pressable>
      )}
    </>
  );
}
