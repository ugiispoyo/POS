import React, {useEffect, useState} from 'react';
import {Image, View, Pressable, StyleSheet, Text} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import styles from './styles';
import {T_ImagePicker} from './type';
import {Controller} from 'react-hook-form';

export default function ImagePicker({
  value,
  onImageChange,
  label,
  name,
  hookForm,
  hookOptions,
}: T_ImagePicker): React.JSX.Element {
  const [img, setImg] = useState<Asset[] | null>(value || null);

  let choicePhoto: (onChange?: (...event: any[]) => void) => void;

  choicePhoto = onChange => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (typeof response?.assets !== 'undefined') {
        setImg(response?.assets);
        if (typeof onImageChange !== 'undefined') {
          onImageChange(response?.assets);
        }

        if (onChange) onChange(response?.assets);
      }
    });
  };

  let styleImg =
    img !== null && img.length !== 0
      ? StyleSheet.create({
          imgPriview: {
            minWidth: '100%',
            width: 'auto',
            minHeight: 150,
            height: '100%',
            borderRadius: 10,
            marginBottom: 10,
          },
        })
      : StyleSheet.create({
          imgPriview: {
            width: 40,
            height: 40,
          },
        });

  const ImagePicker = () => {
    if (typeof hookForm !== 'undefined') {
      if (typeof name === 'undefined') {
        return (
          <Text style={{color: 'red'}}>
            Props name is required if use hookForm
          </Text>
        );
      }

      const {control} = hookForm;

      return (
        <Controller
          control={control}
          name={name}
          rules={hookOptions}
          render={({field: {onChange, value}, formState: {errors}}) => {
            const val = img || value;

            let styleImg =
              val !== null && val.length !== 0
                ? StyleSheet.create({
                    imgPriview: {
                      minWidth: '100%',
                      width: 'auto',
                      minHeight: 150,
                      height: '100%',
                      borderRadius: 10,
                      marginBottom: 10,
                    },
                  })
                : StyleSheet.create({
                    imgPriview: {
                      width: 40,
                      height: 40,
                    },
                  });

            return (
              <>
                <Pressable
                  style={styles.btnImg}
                  onPress={() => choicePhoto(onChange)}>
                  <Image
                    source={
                      val?.length === 0 || val === null
                        ? require('@assets/icons/img.png')
                        : {
                            uri: val?.[0]?.uri,
                          }
                    }
                    style={styleImg.imgPriview}
                  />
                </Pressable>
                {!!errors?.[name] && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors?.[name]?.message as any}
                  </Text>
                )}
              </>
            );
          }}
        />
      );
    }

    return (
      <>
        <Pressable style={styles.btnImg} onPress={() => choicePhoto()}>
          <Image
            source={
              img === null
                ? require('@assets/icons/img.png')
                : {
                    uri: img?.[0]?.uri,
                  }
            }
            style={styleImg.imgPriview}
          />
        </Pressable>
      </>
    );
  };

  return (
    <View style={styles.wrapImg}>
      <Text style={styles.labelImg}>{label}</Text>
      <ImagePicker />
    </View>
  );
}
