import React, {useState} from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import TextInput from '@components/TextInput';
import Button from '@components/Button';

import styles from './styles';

export default function Host(): React.JSX.Element {
  const navigation = useNavigation<any>();

  const [host, setHost] = useState<string>('');

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
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{marginBottom: 20}}>
            <TextInput
              label="Hostname"
              value={host}
              onChangeText={setHost}
              placeholder="http://192.168.0.1:8000/"
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
            <Button onPress={() => navigation.navigate('Login')}>Save</Button>
          </Animated.View>
        </View>
      </DropShadow>
    </SafeAreaView>
  );
}
