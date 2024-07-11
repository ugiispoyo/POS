import React from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';

import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import TextInput from '@components/TextInput';
import Button from '@components/Button';

import styles from './styles';

import {T_GlobalContextCTX} from '@context/types';
import {useGlobalProps} from '@context/context';

export default function Host(): React.JSX.Element {
  const {saveHost, hookHostnameForm} = useGlobalProps() as T_GlobalContextCTX;

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <View style={styles.bg}>
        <Image
          style={styles.bgImg}
          source={require('@assets/images/bg-header.jpeg')}
        />
      </View>
      <Animated.Text
        entering={FadeInUp.delay(200).duration(1000)}
        style={styles.textHost}>
        Hostname
      </Animated.Text>
      <Animated.Text
        entering={FadeInUp.delay(100).duration(1000)}
        style={{
          fontSize: 14,
          fontWeight: '600',
          marginBottom: 20,
          color: '#fff',
          textAlign: 'center',
        }}>
        Masukan alamat hostname anda untuk melanjutkan, contoh:
        http://192.168.0.1:8000/
      </Animated.Text>
      <DropShadow style={styles.shadowCardHost}>
        <View style={styles.cardHost}>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}>
            <TextInput
              label="Hostname"
              name="hostname"
              hookOptions={{
                required: 'Hostname wajib diisi!',
                pattern: {
                  value:
                    /^(https?):\/\/((\d{1,3}\.){3}\d{1,3}|localhost|[\da-z\.-]+\.[a-z]{2,6})(:[0-9]{1,5})?(\/[^\s]*)?$/i,
                  message: 'Url hostname tidak valid!',
                },
              }}
              hookForm={hookHostnameForm}
              placeholder="http://192.168.1.5:8000"
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(600).duration(1000).springify()}
            style={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <Button onPress={hookHostnameForm.handleSubmit(saveHost)}>
              Simpan
            </Button>
          </Animated.View>
        </View>
      </DropShadow>
    </SafeAreaView>
  );
}
