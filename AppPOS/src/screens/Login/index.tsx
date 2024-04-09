import React, {useState} from 'react';
import {View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

import TextInput from '@components/TextInput';
import Button from '@components/Button';

import styles from './styles';

export default function Login(): React.JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.body}>
      <LinearGradient
        style={styles.gr}
        colors={['#10a8e5', '#fff']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
      />
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
            <Button>Login</Button>
          </Animated.View>
        </View>
      </DropShadow>
    </View>
  );
}
