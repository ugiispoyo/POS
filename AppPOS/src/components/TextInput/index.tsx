import React from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';

import styles from './styles';
import {T_TextInput} from './type';

export default function index({
  label,
  placeholder,
  ...props
}: T_TextInput & TextInputProps): React.JSX.Element {
  return (
    <View style={{width: '100%'}}>
      <Text style={styles.labelInputText}>{label}</Text>
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={'#ccc'}
        {...props}
      />
    </View>
  );
}
