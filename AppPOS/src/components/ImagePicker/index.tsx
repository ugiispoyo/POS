import React, { useEffect, useState } from 'react';
import { Image, View, Pressable, StyleSheet, Text } from 'react-native';
import { Asset, launchImageLibrary } from 'react-native-image-picker';
import { Controller } from 'react-hook-form';

import styles from './styles';
import { T_ImagePicker } from './type';

export default function ImagePicker({
  value,
  onImageChange,
  label,
  name,
  hookForm,
  hookOptions,
}: T_ImagePicker): React.JSX.Element {
  const [img, setImg] = useState<Asset[] | null>(value || null);

  useEffect(() => {
    if (typeof hookForm !== 'undefined') {
      setTimeout(() => {
        setImg(hookForm?.getValues(name as string))
      }, 500)
    }
  }, [])

  let choicePhoto: (onChange?: (...event: any[]) => void) => void;
  const isUseHookform = hookForm && name;

  choicePhoto = onChange => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (typeof response?.assets !== 'undefined') {
        setImg(response?.assets);
        if (typeof onImageChange !== 'undefined') {
          onImageChange(response?.assets);
        }
        if (isUseHookform && onChange) {
          hookForm.clearErrors(name);
          onChange(response?.assets);
        }
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
          <Text style={{ color: 'red' }}>
            Props name is required if use hookForm
          </Text>
        );
      }

      const { control } = hookForm;

      return (
        <Controller
          control={control}
          name={name}
          rules={hookOptions}
          render={({ field: { value, onChange }, formState: { errors } }) => {
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

            const styleError = !!errors?.[name]
              ? StyleSheet.create({
                error: {
                  borderColor: 'red',
                  borderWidth: 1,
                },
              }).error
              : {};

            return (
              <>
                <Pressable
                  style={{
                    ...styles.btnImg,
                    ...styleError,
                  }}
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
                  <Text style={{ color: 'red', fontSize: 12 }}>
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
