import React from 'react';
import {
  View,
  Text,
  TextInput as _TextInput,
  StyleSheet,
  TextInputProps,
} from 'react-native';
import {Controller} from 'react-hook-form';

import styles from './styles';
import {T_TextInput} from './type';
import {numericFormatter} from 'react-number-format';

export default function TextInput({
  name,
  hookForm,
  hookOptions,
  label,
  isFormatCurrency,
  ...props
}: T_TextInput): React.JSX.Element {
  /* for custom style */
  const customStyles = props?.style ? props?.style : ({} as any);
  /* filter props exclude style */
  const initProps = Object.entries(props)
    .filter(([key]) => key !== 'style')
    .reduce((obj: any, item: any) => {
      obj[item[0]] = item[1];
      return obj;
    }, {}) as TextInputProps;

  /* Check is type keyboard type is number only */
  const isKeyborboarNumb =
    initProps?.keyboardType &&
    [
      'number-pad',
      'decimal-pad',
      'numeric',
      'numbers-and-punctuation',
    ].includes(initProps?.keyboardType)
      ? true
      : false;

  const InputText = () => {
    if (typeof hookForm !== 'undefined') {
      if (typeof name === 'undefined') {
        return (
          <Text style={{color: 'red'}}>
            Props name is required if use hookForm
          </Text>
        );
      }
      const {control} = hookForm;

      return (
        <Controller
          control={control}
          name={name}
          rules={hookOptions}
          render={({field: {onChange, value, onBlur}, formState: {errors}}) => {
            const styleError = !!errors?.[name]
              ? StyleSheet.create({
                  error: {
                    borderColor: 'red',
                    borderWidth: 1,
                  },
                }).error
              : {};

            let val = isKeyborboarNumb ? value.toString() : value;

            val = isFormatCurrency
              ? numericFormatter(value.toString(), {thousandSeparator: '.'})
              : value.toString();

            return (
              <>
                <_TextInput
                  style={[styles.inputText, styleError, customStyles]}
                  placeholderTextColor={'#ccc'}
                  value={val}
                  onBlur={onBlur}
                  onChangeText={(val: any) => {
                    let value = val as any;
                    if (isFormatCurrency) {
                      value = value.replace(/\./g, '');
                    }
                    if (isKeyborboarNumb && value !== '') {
                      value = parseInt(value);
                    }
                    onChange(value);
                  }}
                  {...initProps}
                />
                {!!errors?.[name] && (
                  <Text style={{color: 'red', fontSize: 12}}>
                    {errors?.[name]?.message as any}
                  </Text>
                )}
              </>
            );
          }}
        />
      );
    }

    return (
      <_TextInput
        style={[styles.inputText, customStyles]}
        placeholderTextColor={'#ccc'}
        {...initProps}
      />
    );
  };

  return (
    <View style={{width: '100%', marginBottom: 16}}>
      <Text style={styles.labelInputText}>{label}</Text>
      <InputText />
    </View>
  );
}
