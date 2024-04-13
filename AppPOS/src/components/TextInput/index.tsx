import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';

import styles from './styles';
import {T_TextInput} from './type';

export default function index({
  name,
  hookForm,
  hookOptions,
  label,
  ...props
}: T_TextInput): React.JSX.Element {
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
                    borderWidth: 1
                  },
                }).error
              : {};

            return (
              <>
                <TextInput
                  style={{...styles.inputText, ...styleError}}
                  placeholderTextColor={'#ccc'}
                  value={value}
                  onBlur={onBlur}
                  onChangeText={val => onChange(val)}
                  {...props}
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
      <TextInput
        style={styles.inputText}
        placeholderTextColor={'#ccc'}
        {...props}
      />
    );
  };

  return (
    <View style={{width: '100%'}}>
      <Text style={styles.labelInputText}>{label}</Text>
      <InputText />
    </View>
  );
}
