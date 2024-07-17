import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';

import Header from './components/header';
import Card from './components/card';

import {useGlobalProps} from '@context/context';

import styles from './styles';

import {T_GlobalContextCTX} from '@context/types';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const {changeHostname} = useGlobalProps() as T_GlobalContextCTX;

  return (
    <SafeAreaView style={styles.body}>
      <StatusBar animated={true} translucent backgroundColor="transparent" />
      <Header />
      <Card />
      <DropShadow style={styles.btnImgShadow}>
        <TouchableOpacity
          style={styles.btnHostname}
          onPress={async () => changeHostname()}>
          <Image
            style={styles.btnImgHostname}
            source={require('@assets/icons/hostname.png')}
          />
        </TouchableOpacity>
      </DropShadow>
      <DropShadow style={styles.btnImgShadowPrint}>
        <TouchableOpacity
          style={styles.btnHostnamePrint}
          onPress={() => navigation.navigate('ConnectToPrint')}>
          <Image
            style={styles.btnImgHostname}
            source={require('@assets/icons/printer.png')}
          />
        </TouchableOpacity>
      </DropShadow>
    </SafeAreaView>
  );
}
