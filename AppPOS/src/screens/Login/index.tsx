import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

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
            <Text style={styles.labelInputText}>Email</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setEmail}
              value={email}
              placeholder="examlple@gmail.com"
              placeholderTextColor={'#ccc'}
            />
          </Animated.View>
          <Animated.View
            entering={FadeInDown.delay(400).duration(1000).springify()}
            style={{marginBottom: 20}}>
            <Text style={styles.labelInputText}>Password</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={setPassword}
              value={password}
              placeholder="examlple@gmail.com"
              secureTextEntry
              placeholderTextColor={'#ccc'}
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
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </DropShadow>
    </View>
  );
}
