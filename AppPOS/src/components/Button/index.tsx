import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';
import {T_Button} from './type';

export default function index({
  children,
  style,
  ...props
}: T_Button & TouchableOpacityProps): React.JSX.Element {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      {typeof children === 'string' ? (
        <Text style={styles.textButton}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
