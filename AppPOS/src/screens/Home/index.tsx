import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  View,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Header from './components/header';
import Card from './components/card';
import ModalReport from './components/modal-report';

import {useGlobalProps} from '@context/context';

import styles from './styles';

import {T_GlobalContextCTX} from '@context/types';

import {HomeProvider} from './context';

export default function Home(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const {changeHostname} = useGlobalProps() as T_GlobalContextCTX;

  return (
    <HomeProvider>
      <SafeAreaView style={styles.body}>
        <StatusBar animated={true} translucent backgroundColor="transparent" />
        <Header />
        <Card />
        <ModalReport />
        <View style={styles.btnImgShadow}>
          <TouchableOpacity
            style={styles.btnHostname}
            onPress={async () => changeHostname()}>
            <Image
              style={styles.btnImgHostname}
              source={require('@assets/icons/hostname.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.btnImgShadowPrint}>
          <TouchableOpacity
            style={styles.btnHostnamePrint}
            onPress={() => navigation.navigate('ConnectToPrint')}>
            <Image
              style={styles.btnImgHostname}
              source={require('@assets/icons/printer.png')}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </HomeProvider>
  );
}
