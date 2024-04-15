import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import styles from './styles';
import {T_Button} from './type';

export default function Button({
  children,
  ...props
}: T_Button & TouchableOpacityProps): React.JSX.Element {
  /* for custom style */
  const customStyles = props?.style ? props?.style : ({} as any);
  /* filter props exclude style */
  const initProps = Object.entries(props)
    .filter(([key]) => key !== 'style')
    .reduce((obj: any, item: any) => {
      obj[item[0]] = item[1];
      return obj;
    }, {}) as TouchableOpacityProps;

  return (
    <TouchableOpacity style={[styles.button, customStyles]} {...initProps}>
      {typeof children === 'string' ? (
        <Text style={styles.textButton}>{children}</Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}
