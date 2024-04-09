import React, {useState} from 'react';
import {Image, SafeAreaView, StatusBar, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import TextInput from '@components/TextInput';
import Button from '@components/Button';

import styles from './styles';

export default function Login(): React.JSX.Element {
  const navigation = useNavigation<any>();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
        style={styles.textLogin}>
        Login
      </Animated.Text>
      <DropShadow style={styles.shadowCardLogin}>
        <View style={styles.cardLogin}>
          <Animated.View
            entering={FadeInDown.delay(200).duration(1000).springify()}
            style={{marginBottom: 20}}>
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="examlple@gmail.com"
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={{marginBottom: 20}}>
            <TextInput
              label="Passowrd"
              value={password}
              onChangeText={setPassword}
              placeholder="*****"
              secureTextEntry
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
            <Button onPress={() => navigation.navigate('Home')}>Login</Button>
          </Animated.View>
        </View>
      </DropShadow>
    </SafeAreaView>
  );
}
