import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, ToastAndroid, TouchableOpacity, View} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

import styles from '../../styles';
import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';
import dayjs from 'dayjs';

export default function Card(): React.JSX.Element {
  const navigation = useNavigation<any>();
  const {state} = useGlobalProps() as T_GlobalContextCTX;
  const {hostname} = state;

  const downloadReport = () => {
    const {config, fs} = RNFetchBlob;
    let DownloadDir = fs.dirs.DownloadDir; // Ganti ini dengan direktori yang sesuai jika perlu

    const url = `${hostname}/api/download-report-${dayjs().format(
      'YYYY-MM-DD',
    )}-to-${dayjs().format('YYYY-MM-DD')}.pdf`;

    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        // path: `${DownloadDir}/Report-${dayjs().format(
        //   'YYYY-MM-DD',
        // )}-to-${dayjs().format('YYYY-MM-DD')}.pdf`,
        path: `${DownloadDir}/Report-${dayjs().format('YYYY-MM-DD')}.pdf`,
        description: 'Downloading the report.',
      },
    })
      .fetch('GET', url)
      .then((res: any) => {
        ToastAndroid.showWithGravityAndOffset(
          `Berhasil download report hari ini`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      })
      .catch((error: any) => {
        ToastAndroid.showWithGravityAndOffset(
          `Failed to download PDF: ${error}`,
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        console.error(error);
      });
  };

  return (
    <View style={styles.wrapCard}>
      <TouchableOpacity
        style={styles.btnCard}
        onPress={() => navigation.navigate('ProductList')}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/product.png')}
          />
        </View>
        <Text style={styles.textCard}>Produk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnCard}
        onPress={() => navigation.navigate('Casier')}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/casier.png')}
          />
        </View>
        <Text style={styles.textCard}>Kasir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnCard} onPress={() => downloadReport()}>
        <View style={styles.wrapBtnCard}>
          <Image
            style={styles.imgCard}
            source={require('@assets/icons/report.png')}
          />
        </View>
        <Text style={styles.textCard}>Report</Text>
      </TouchableOpacity>
    </View>
  );
}
