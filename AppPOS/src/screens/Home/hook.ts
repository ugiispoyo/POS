import RNFetchBlob from 'rn-fetch-blob';
import {ToastAndroid} from 'react-native';

import dayjs from 'dayjs';

import {useGlobalProps} from '@context/context';

import {T_GlobalContextCTX} from '@context/types';

export const useLogic = () => {
  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;

  const {hostname} = state;

  const downloadReport = (type: 'pdf' | 'xlsx') => {
    const {config, fs} = RNFetchBlob;
    let DownloadDir = fs.dirs.DownloadDir; // Directory for save data

    const url = `${hostname}/api/download-report-${dayjs().format(
      'YYYY-MM-DD',
    )}-to-${dayjs().format('YYYY-MM-DD')}.${type}`;

    dispatch({Home: {showModalReport: false}});

    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        // path: `${DownloadDir}/Report-${dayjs().format(
        //   'YYYY-MM-DD',
        // )}-to-${dayjs().format('YYYY-MM-DD')}.${type}`,
        path: `${DownloadDir}/Report-${dayjs().format('YYYY-MM-DD')}.${type}`,
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

  return {
    ...state,
    dispatch,
    downloadReport,
  };
};
