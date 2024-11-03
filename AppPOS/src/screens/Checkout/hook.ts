import {useForm} from 'react-hook-form';
import {BluetoothEscposPrinter} from 'react-native-bluetooth-escpos-printer';

import {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ToastAndroid} from 'react-native';

import checkout from '@services/checkout';

import numberToIDR from '@utils/numberToIDR';

import {useGlobalProps} from '@context/context';
import {T_GlobalContextCTX} from '@context/types';

import {T_FieldCheckout} from './types';
import dayjs from 'dayjs';

const fieldCheckout: T_FieldCheckout = {
  nominal: 0,
};

export const useLogic = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const {state, dispatch} = useGlobalProps() as T_GlobalContextCTX;
  const {Casier} = state;

  const hookForm = useForm({
    defaultValues: fieldCheckout,
  });

  useEffect(() => {
    dispatch({
      Checkout: {
        isModalChange: Boolean(route?.params?.isOpenModal),
      },
    });
  }, [route.params]);

  const onCheckout = async (data: T_FieldCheckout) => {
    dispatch({loading: {isLoading: true, module: 'CHECKOUT'}});
    const formData = new FormData();
    const Cart = Casier.cart;

    Object.entries(Cart).forEach(([key, value]) => {
      let val: any = value;
      if (key === 'items') {
        val = JSON.stringify(value);
      }

      formData.append(key, val);
    });

    const result = await checkout({init: {body: formData}});
    if (
      ['checkout created successfully'].includes(result.message?.toLowerCase())
    ) {
      dispatch({loading: {isLoading: false, module: ''}});
      dispatch({
        Checkout: {
          ...state.Checkout,
          isModalChange: true,
        },
      });
    } else {
      ToastAndroid.showWithGravityAndOffset(
        JSON.stringify(JSON.parse(result.message)),
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
      dispatch({loading: {isLoading: false, module: ''}});
    }
  };

  const onPrint = async () => {
    const bluetooth = state.bluetoothConfig;
    if (
      !bluetooth.bleOpend ||
      bluetooth.foundDs.length === 0 ||
      bluetooth.name === '' ||
      bluetooth.boundAddress === ''
    ) {
      dispatch({
        Checkout: {
          ...state.Checkout,
          isModalChange: false,
        },
      });
      navigation.navigate('ConnectToPrint', {ref: 'Checkout'});
      return;
    }

    await printStruk();
  };

  const printStruk = async () => {
    const Items = Casier.cart.items;
    try {
      await BluetoothEscposPrinter.printerInit();
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.CENTER,
      );
      await BluetoothEscposPrinter.printText('MILK SHAKE RUMAISHA\r\n\r\n', {
        font: 4,
      });
      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.LEFT,
      );
      await BluetoothEscposPrinter.printColumn(
        [30],
        [BluetoothEscposPrinter.ALIGN.LEFT],
        [dayjs().format('DD MMM YYYY, HH:mm:ss')],
        {
          fonttype: 3,
        },
      );
      await BluetoothEscposPrinter.printText(
        '================================\r\n\r\n',
        {},
      );

      await BluetoothEscposPrinter.printerUnderLine(2);

      for (let val of Items) {
        await BluetoothEscposPrinter.printText(`${val.name} \r\n`, {
          encoding: 'GBK',
          codepage: 0,
          widthtimes: 0,
          heigthtimes: 0,
          fonttype: 10,
        });

        // Calc price bas on discount
        let price =
          val.isDiscount === '1'
            ? parseFloat(val.priceAfterDiscount ?? ('0' as any))
            : parseFloat(val.price as any);

        await BluetoothEscposPrinter.printColumn(
          [5, 15, 20],
          [
            BluetoothEscposPrinter.ALIGN.LEFT,
            BluetoothEscposPrinter.ALIGN.LEFT,
            BluetoothEscposPrinter.ALIGN.RIGHT,
          ],
          [
            `${val.total.toString()}x`,
            numberToIDR(price),
            numberToIDR(val.total * price),
          ],
          {
            fonttype: 3,
          },
        );

        if (val.isDiscount === '1') {
          await BluetoothEscposPrinter.printColumn(
            [5, 15, 20],
            [
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.LEFT,
              BluetoothEscposPrinter.ALIGN.RIGHT,
            ],
            [
              '',
              numberToIDR(parseFloat(val.price as any)),
              numberToIDR(val.total * parseFloat(val.price as any)),
            ],
            {
              fonttype: 3,
            },
          );
        }

        await BluetoothEscposPrinter.printText(
          '--------------------------------\r\n',
          {},
        );
      }

      await BluetoothEscposPrinter.printText('\r\n', {});
      await BluetoothEscposPrinter.printColumn(
        [15, 15],
        [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
        ['Total Item', 'Total Harga'],
        {
          font: 3,
        },
      );
      const fixTotalAmount =
        Casier.cart.totalFixAmount !== Casier.cart.totalOriginalAmount
          ? Casier.cart.totalFixAmount
          : Casier.cart.totalOriginalAmount;
      await BluetoothEscposPrinter.printColumn(
        [15, 15],
        [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
        [`${Casier.cart.totalItems}x`, numberToIDR(fixTotalAmount)],
        {
          font: 3,
        },
      );
      if (Casier.cart.totalFixAmount !== Casier.cart.totalOriginalAmount) {
        await BluetoothEscposPrinter.printColumn(
          [15, 15],
          [
            BluetoothEscposPrinter.ALIGN.LEFT,
            BluetoothEscposPrinter.ALIGN.RIGHT,
          ],
          [``, numberToIDR(Casier.cart.totalOriginalAmount)],
          {
            font: 3,
          },
        );
      }

      await BluetoothEscposPrinter.printText(
        `\r\nNominal Bayar: \r\n${numberToIDR(
          hookForm.getValues('nominal'),
        )}\r\n\r\n`,
        {font: 3},
      );

      if (hookForm.getValues('nominal') > fixTotalAmount) {
        await BluetoothEscposPrinter.printText(
          `Kembalian: \r\n${numberToIDR(
            hookForm.getValues('nominal') - fixTotalAmount,
          )}\r\n\r\n`,
          {font: 3},
        );
      }

      await BluetoothEscposPrinter.printerAlign(
        BluetoothEscposPrinter.ALIGN.CENTER,
      );
      await BluetoothEscposPrinter.printText(`Terimakasih!\r\n`, {font: 5});
      await BluetoothEscposPrinter.printText(`APP By: Ugi Ispoyo Widodo\r\n`, {font: 3});
      await BluetoothEscposPrinter.printText(
        '================================\r\n\r\n',
        {},
      );

      await BluetoothEscposPrinter.printText('\r\n\r\n', {});

      setTimeout(() => {
        dispatch({
          Casier: {
            cart: {
              items: [],
              totalFixAmount: 0,
              totalItems: 0,
              totalOriginalAmount: 0,
            },
            detailProduct: null,
          },
        });
        dispatch({Checkout: {isModalChange: false}});

        navigation.navigate('Casier');
      }, 3000);
    } catch (e: any) {
      ToastAndroid.showWithGravityAndOffset(
        `Sedang terjadi kesalahan! ${e}`,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
  };

  return {hookForm, onCheckout, onPrint};
};
