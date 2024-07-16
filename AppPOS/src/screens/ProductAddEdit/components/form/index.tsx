import React from 'react';
import {
  Image,
  Pressable,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import TextInput from '@components/TextInput';
import styleText from '@components/TextInput/styles';
import Button from '@components/Button';

import styles from '../../styles';

import { useProps } from '@screens/ProductAddEdit/context';
import { T_ProductAddEditCTX } from '@screens/ProductAddEdit/types';
import ImagePicker from '@components/ImagePicker';

export default function Form(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const { hookForm, onSave, isDiscount, isFood, loading } =
    useProps() as T_ProductAddEditCTX;

  return (
    <View style={styles.wrapForm}>
      {loading?.isLoading && loading?.module === "PRODUCT_LIST" ?
        <View style={styles.contentForm}>
          <Text style={{ color: "#000", textAlign: "center" }}>Loading...</Text>
        </View>
        :
        <View style={styles.contentForm}>
          <TextInput
            label="Nama"
            name="name"
            hookForm={hookForm}
            hookOptions={{ required: 'Nama wajib diisi!' }}
            placeholder="Nama makanan"
          />
          <TextInput
            label="Deskripsi"
            name="description"
            numberOfLines={5}
            multiline
            style={{ textAlignVertical: 'top' }}
            hookForm={hookForm}
            hookOptions={{ required: 'Deskripsi wajib diisi!' }}
            placeholder="Deskripsi makanan"
          />
          <ImagePicker
            label="Photo"
            name="image"
            hookForm={hookForm}
            hookOptions={{ required: 'Photo makanan wajib diisi!' }}
          />
          <TextInput
            label="Harga"
            name="price"
            keyboardType="number-pad"
            isFormatCurrency
            hookForm={hookForm}
            hookOptions={{ required: 'Harga wajib diisi!' }}
            placeholder="Harga makanan"
          />
          <TextInput
            label="Stok"
            name="stock"
            keyboardType="number-pad"
            isFormatCurrency
            hookForm={hookForm}
            placeholder="Stock makanan"
          />
          <View style={styles.wrapInputField}>
            <Text style={styleText.labelInputText}>Diskon</Text>
            <Switch
              trackColor={{ false: '#767577', true: '#39aec1' }}
              thumbColor={isDiscount ? '#608B55' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={val => {
                if (!isDiscount) hookForm.setValue('priceAfterDiscount', '');
                hookForm.setValue('isDiscount', !isDiscount);
              }}
              value={isDiscount}
            />
          </View>
          {isDiscount && (
            <Animated.View entering={FadeInUp.duration(100).delay(100)}>
              <TextInput
                label="Harga Diskon"
                name="priceAfterDiscount"
                keyboardType="number-pad"
                isFormatCurrency
                hookForm={hookForm}
                hookOptions={{ required: 'Harga setelah diskon wajib diisi!' }}
                placeholder="Harga setelah diskon"
              />
            </Animated.View>
          )}
          <View style={styles.wrapInputField}>
            <Text style={styleText.labelInputText}>Tipe</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Pressable
                onPress={() => hookForm.setValue('type', 'MAKANAN')}
                style={{
                  width: '50%',
                  borderColor: '#ddd',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderLeftWidth: 1,
                  paddingVertical: 12,
                  display: 'flex',
                  justifyContent: 'center',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  alignItems: 'center',
                  backgroundColor: !isFood ? '#eee' : '#608B55',
                }}>
                <Text style={{ color: !isFood ? '#999' : '#fff' }}>Makanan</Text>
              </Pressable>
              <Pressable
                onPress={() => hookForm.setValue('type', 'MINUMAN')}
                style={{
                  width: '50%',
                  borderColor: '#ddd',
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  borderRightWidth: 1,
                  paddingVertical: 12,
                  display: 'flex',
                  justifyContent: 'center',
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  alignItems: 'center',
                  backgroundColor: isFood ? '#eee' : '#608B55',
                }}>
                <Text style={{ color: isFood ? '#999' : '#fff' }}>Minuman</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.wrapBtn}>
            <TouchableOpacity
              style={{ width: 37, height: 37 }}
              onPress={() => navigation.navigate('ProductList')}>
              <Image
                style={{ height: '100%', width: 'auto' }}
                source={require('@assets/icons/back.png')}
              />
            </TouchableOpacity>
            <Button
              disabled={loading?.isLoading && loading.module === "ADD_UPDATE_PRODUCT"}
              onPress={hookForm.handleSubmit(onSave)}>
              {loading?.isLoading && loading.module === "ADD_UPDATE_PRODUCT" ? "In progress..." : "Simpan"}
            </Button>
          </View>
        </View>
      }
    </View>
  );
}
